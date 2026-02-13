
import React, { useMemo, useState } from 'react';
import { CategoryDef, Book } from '../types';
import { sortCategoriesRecursive } from '../utils/categoryHelpers';
import { Folder, FolderOpen, ChevronRight, ChevronDown, SlidersHorizontal, BookHeart, X, Nut } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  categories: CategoryDef[];
  selectedCategory: string | null;
  onSelectCategory: (name: string | null) => void;
  bookCount: number;
  books: Book[];
  onOpenCategoryManager: () => void;
  onOpenSettings: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  categories,
  selectedCategory,
  onSelectCategory,
  bookCount,
  books,
  onOpenCategoryManager,
  onOpenSettings
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  // Use the helper to sort
  const sortedCategories = useMemo(() => {
    return sortCategoriesRecursive(categories);
  }, [categories]);

  // Calculate book counts recursively
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    const directCounts: Record<string, number> = {};
    
    // 1. Count books for each category name directly
    books.forEach(b => {
      const cat = b.category || '未分類';
      directCounts[cat] = (directCounts[cat] || 0) + 1;
    });

    // 2. Aggregate counts up the tree
    const aggregate = (node: CategoryDef): number => {
      let sum = directCounts[node.name] || 0;
      if (node.children) {
        node.children.forEach(child => {
          sum += aggregate(child);
        });
      }
      counts[node.id] = sum;
      return sum;
    };

    categories.forEach(node => aggregate(node));
    return counts;
  }, [books, categories]);

  const toggleCategoryExpand = (catId: string) => {
    setExpandedCategories(prev => {
        const next = new Set(prev);
        if (next.has(catId)) next.delete(catId);
        else next.add(catId);
        return next;
    });
  };

  const renderSidebarItem = (node: CategoryDef, depth: number) => {
    const isExpanded = expandedCategories.has(node.id);
    const isSelected = selectedCategory === node.name;
    const hasChildren = node.children && node.children.length > 0;
    const count = categoryCounts[node.id] || 0;

    let textColorClass = 'text-slate-400';
    if (depth === 0) textColorClass = isSelected ? 'text-rose-400' : 'text-rose-400/80 hover:text-rose-300';
    else if (depth === 1) textColorClass = isSelected ? 'text-indigo-400' : 'text-indigo-400/80 hover:text-indigo-300';
    else textColorClass = isSelected ? 'text-slate-200' : 'text-slate-400 hover:text-slate-300';

    return (
      <div key={node.id} className="select-none">
        <div className={`flex items-center justify-between py-1.5 pr-2 rounded-lg transition-colors cursor-pointer ${
           isSelected ? 'bg-slate-800' : 'hover:bg-slate-800/50'
        } ${depth > 0 ? 'ml-4 border-l border-slate-800 pl-2' : ''}`}>
           <button 
              className={`flex-1 flex items-center gap-2 text-left truncate ${textColorClass}`}
              onClick={() => {
                onSelectCategory(node.name);
                if (window.innerWidth < 1024) onClose();
              }}
           >
              {depth === 0 ? (isSelected ? <FolderOpen size={16} /> : <Folder size={16} />) : null}
              <span className={`text-sm flex-1 truncate ${depth === 0 ? 'font-semibold' : 'font-medium'}`}>{node.name}</span>
              
              {count > 0 && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                    isSelected 
                    ? 'bg-white/10 text-current' 
                    : 'bg-slate-800 text-slate-500'
                }`}>
                    {count}
                </span>
              )}
           </button>
           {hasChildren && (
             <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCategoryExpand(node.id);
                }}
                className="p-1 rounded hover:bg-slate-700 text-slate-500 ml-1"
             >
                {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
             </button>
           )}
        </div>
        {hasChildren && isExpanded && (
          <div>
            {node.children.map(child => renderSidebarItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const SidebarContent = () => (
    <>
        <div className="flex items-center justify-between p-4 pb-2 lg:mb-0 mb-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <BookHeart size={16} className="lg:hidden" />
                書架導航
            </h3>
            <div className="flex gap-2 lg:block">
                <button 
                    onClick={onOpenCategoryManager}
                    className="p-1.5 hover:bg-slate-800 rounded text-slate-500 hover:text-indigo-400 transition-colors"
                    title="編輯書架分類"
                >
                    <SlidersHorizontal size={16} />
                </button>
                 <button onClick={onOpenSettings} className="lg:hidden p-1.5 text-slate-500 hover:bg-slate-800 rounded hover:text-indigo-400"><Nut size={16} /></button>
                 <button onClick={onClose} className="lg:hidden p-1.5 text-slate-500 hover:bg-slate-800 rounded hover:text-indigo-400"><X size={16} /></button>
            </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-1">
            <button
                onClick={() => {
                    onSelectCategory(null);
                    if (window.innerWidth < 1024) onClose();
                }}
                className={`w-full flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-lg transition-colors ${
                    !selectedCategory ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
            >
                <BookHeart size={18} />
                所有書籍
                <span className="ml-auto text-xs opacity-60 bg-black/20 px-2 py-0.5 rounded-full">{bookCount}</span>
            </button>
            <div className="pt-2">
                {sortedCategories.map(cat => renderSidebarItem(cat, 0))}
            </div>
        </nav>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-slate-800 bg-slate-950/50">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-slate-900 w-80 h-full shadow-2xl overflow-y-auto flex flex-col">
                <SidebarContent />
            </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
