import React, { useState, useEffect } from 'react';
import { CategoryDef } from '../types';
import { sortCategoriesRecursive } from '../utils/categoryHelpers';
import { X, Plus, Trash2, Edit2, ChevronDown, ChevronRight, Save, FolderOpen, Folder, SlidersHorizontal, ArrowRightLeft } from 'lucide-react';

interface CategoryManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: CategoryDef[];
  onUpdateCategories: (newCategories: CategoryDef[]) => void;
}

const CategoryManagerModal: React.FC<CategoryManagerModalProps> = ({ 
  isOpen, 
  onClose, 
  categories, 
  onUpdateCategories
}) => {
  const [localCategories, setLocalCategories] = useState<CategoryDef[]>([]);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [addingChildToId, setAddingChildToId] = useState<string | null>(null);
  const [newCatName, setNewCatName] = useState('');
  const [movingId, setMovingId] = useState<string | null>(null);
  const [movingName, setMovingName] = useState('');

  useEffect(() => {
    if (isOpen) {
      // Sort immediately upon opening
      const sorted = sortCategoriesRecursive(JSON.parse(JSON.stringify(categories)));
      setLocalCategories(sorted);
      setMovingId(null);
    }
  }, [isOpen, categories]);

  if (!isOpen) return null;

  const updateNodeInTree = (nodes: CategoryDef[], id: string, transform: (node: CategoryDef) => CategoryDef): CategoryDef[] => {
    const newNodes = nodes.map(node => {
      if (node.id === id) return transform(node);
      if (node.children) {
        return { ...node, children: updateNodeInTree(node.children, id, transform) };
      }
      return node;
    });
    // Sort after update
    return sortCategoriesRecursive(newNodes);
  };

  const deleteNodeFromTree = (nodes: CategoryDef[], id: string): CategoryDef[] => {
    return nodes.filter(node => node.id !== id).map(node => ({
      ...node,
      children: deleteNodeFromTree(node.children || [], id)
    }));
  };

  const addChildToNode = (nodes: CategoryDef[], parentId: string, newChild: CategoryDef): CategoryDef[] => {
    const newNodes = nodes.map(node => {
      if (node.id === parentId) {
        return { ...node, children: [...(node.children || []), newChild] };
      }
      if (node.children) {
        return { ...node, children: addChildToNode(node.children, parentId, newChild) };
      }
      return node;
    });
    // Sort after adding
    return sortCategoriesRecursive(newNodes);
  };

  const removeAndGetNode = (nodes: CategoryDef[], id: string): { node: CategoryDef | null, tree: CategoryDef[] } => {
    let foundNode: CategoryDef | null = null;
    const filterRec = (currentNodes: CategoryDef[]): CategoryDef[] => {
        return currentNodes.filter(node => {
            if (node.id === id) {
                foundNode = node;
                return false; 
            }
            if (node.children) {
                node.children = filterRec(node.children);
            }
            return true;
        });
    };
    const newTree = filterRec(JSON.parse(JSON.stringify(nodes))); 
    return { node: foundNode, tree: newTree };
  };

  const flattenCategoriesForMove = (nodes: CategoryDef[], excludeId: string, prefix = ''): { id: string, name: string }[] => {
    let result: { id: string, name: string }[] = [];
    nodes.forEach(node => {
        if (node.id === excludeId) return; 
        const currentName = prefix ? `${prefix} > ${node.name}` : node.name;
        result.push({ id: node.id, name: currentName });
        if (node.children) {
            result = result.concat(flattenCategoriesForMove(node.children, excludeId, currentName));
        }
    });
    return result;
  };

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleAddCategory = (parentId: string | null) => {
    if (!newCatName.trim()) return;
    const newCat: CategoryDef = {
      id: crypto.randomUUID(),
      name: newCatName.trim(),
      children: []
    };
    let updated: CategoryDef[];
    if (parentId === null) {
      updated = sortCategoriesRecursive([...localCategories, newCat]);
    } else {
      updated = addChildToNode(localCategories, parentId, newCat);
      setExpandedIds(prev => new Set(prev).add(parentId));
    }
    setLocalCategories(updated);
    onUpdateCategories(updated);
    setNewCatName('');
    setAddingChildToId(null);
  };

  const handleRename = (id: string) => {
    if (!editValue.trim()) return;
    const updated = updateNodeInTree(localCategories, id, node => ({ ...node, name: editValue.trim() }));
    setLocalCategories(updated);
    onUpdateCategories(updated);
    setEditingId(null);
  };

  const handleDelete = (e: React.MouseEvent, id: string, name: string) => {
    e.stopPropagation();
    if (confirm(`確定要刪除「${name}」嗎？\n該分類下的所有子分類也會被刪除。`)) {
      const updated = deleteNodeFromTree(localCategories, id);
      setLocalCategories(updated);
      onUpdateCategories(updated);
    }
  };

  const initMove = (e: React.MouseEvent, id: string, name: string) => {
    e.stopPropagation();
    setMovingId(id);
    setMovingName(name);
  };

  const executeMove = (targetParentId: string | null) => {
    if (!movingId) return;
    const { node, tree } = removeAndGetNode(localCategories, movingId);
    if (node) {
        let finalTree: CategoryDef[];
        if (targetParentId === null) {
            finalTree = sortCategoriesRecursive([...tree, node]);
        } else {
            finalTree = addChildToNode(tree, targetParentId, node);
            setExpandedIds(prev => new Set(prev).add(targetParentId));
        }
        setLocalCategories(finalTree);
        onUpdateCategories(finalTree);
    }
    setMovingId(null);
  };

  const renderTree = (nodes: CategoryDef[], depth = 0) => {
    return nodes.map(node => (
      <div key={node.id} className="select-none">
        <div 
            className={`flex items-center gap-2 p-2 rounded-lg hover:bg-slate-800 border border-transparent hover:border-slate-700 mb-1 group transition-colors ${depth > 0 ? 'ml-6' : ''}`}
            onClick={() => toggleExpand(node.id)}
        >
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(node.id);
                }}
                className={`p-1 text-slate-500 hover:text-indigo-400 transition-colors ${!node.children?.length ? 'opacity-30' : ''}`}
                disabled={!node.children?.length}
            >
                {expandedIds.has(node.id) ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            <div className="flex-1 flex items-center gap-2 min-w-0">
                {expandedIds.has(node.id) ? <FolderOpen size={16} className="text-indigo-400" /> : <Folder size={16} className="text-slate-500" />}
                {editingId === node.id ? (
                    <div className="flex flex-1 items-center gap-1" onClick={e => e.stopPropagation()}>
                        <input 
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="w-full bg-slate-900 border border-indigo-500 rounded px-2 py-1 text-sm text-white outline-none"
                            autoFocus
                            onKeyDown={(e) => e.key === 'Enter' && handleRename(node.id)}
                        />
                        <button onClick={() => handleRename(node.id)} className="text-green-400 hover:text-green-300"><Save size={16} /></button>
                        <button onClick={() => setEditingId(null)} className="text-red-400 hover:text-red-300"><X size={16} /></button>
                    </div>
                ) : (
                    <span className={`text-sm font-medium truncate ${depth === 0 ? 'text-slate-200' : 'text-slate-400'}`}>
                        {node.name}
                    </span>
                )}
            </div>
            <div className="flex items-center gap-1 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                 <button 
                    onClick={(e) => initMove(e, node.id, node.name)}
                    className="p-1.5 text-slate-500 hover:text-amber-400 hover:bg-slate-700/50 rounded"
                    title="移動分類"
                >
                    <ArrowRightLeft size={14} />
                </button>
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        setAddingChildToId(node.id);
                        setNewCatName('');
                    }}
                    className="p-1.5 text-slate-500 hover:text-indigo-400 hover:bg-slate-700/50 rounded"
                    title="新增子分類"
                >
                    <Plus size={14} />
                </button>
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        setEditingId(node.id);
                        setEditValue(node.name);
                    }}
                    className="p-1.5 text-slate-500 hover:text-blue-400 hover:bg-slate-700/50 rounded"
                    title="重新命名"
                >
                    <Edit2 size={14} />
                </button>
                <button 
                    onClick={(e) => handleDelete(e, node.id, node.name)}
                    className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-slate-700/50 rounded"
                    title="刪除"
                >
                    <Trash2 size={14} />
                </button>
            </div>
        </div>
        {addingChildToId === node.id && (
             <div className={`flex items-center gap-2 p-2 mb-1 ml-${(depth + 1) * 6 + 6} pl-8`}>
                <div className="w-4 h-4 border-l border-b border-slate-700 rounded-bl mr-2"></div>
                <input 
                    value={newCatName}
                    onChange={(e) => setNewCatName(e.target.value)}
                    placeholder="輸入子分類名稱..."
                    className="flex-1 bg-slate-900 border border-indigo-500 rounded px-2 py-1 text-sm text-white outline-none"
                    autoFocus
                    onKeyDown={(e) => e.key === 'Enter' && handleAddCategory(node.id)}
                />
                <button onClick={() => handleAddCategory(node.id)} className="text-green-400"><Save size={16} /></button>
                <button onClick={() => setAddingChildToId(null)} className="text-slate-500"><X size={16} /></button>
            </div>
        )}
        {node.children && expandedIds.has(node.id) && (
            <div>
                {renderTree(node.children, depth + 1)}
            </div>
        )}
      </div>
    ));
  };

  const moveTargets = movingId ? flattenCategoriesForMove(localCategories, movingId) : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-800 rounded-2xl shadow-2xl w-full max-w-lg h-[80vh] flex flex-col border border-slate-700 relative">
        {movingId ? (
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-900/50 rounded-t-2xl">
                    <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">
                        <ArrowRightLeft size={20} /> 移動分類
                    </h2>
                    <button onClick={() => setMovingId(null)} className="p-2 hover:bg-slate-700 rounded-full text-slate-400">
                        <X size={20} />
                    </button>
                </div>
                <div className="p-6 flex-1 overflow-y-auto">
                    <p className="text-slate-300 mb-4">
                        請選擇 <span className="font-bold text-white">「{movingName}」</span> 的新位置：
                    </p>
                    <button 
                        onClick={() => executeMove(null)}
                        className="w-full text-left p-3 mb-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 font-bold flex items-center gap-2"
                    >
                        <FolderOpen size={18} /> 移至最上層 (根目錄)
                    </button>
                    <div className="space-y-1">
                        {moveTargets.map(target => (
                             <button 
                                key={target.id}
                                onClick={() => executeMove(target.id)}
                                className="w-full text-left p-2.5 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-sm flex items-center gap-2"
                            >
                                <Folder size={16} className="text-slate-500" />
                                {target.name}
                            </button>
                        ))}
                        {moveTargets.length === 0 && <p className="text-slate-500 text-sm p-2">沒有其他可移動的目標位置。</p>}
                    </div>
                </div>
            </div>
        ) : (
            <>
                <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-900/50 rounded-t-2xl">
                <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                    <SlidersHorizontal className="text-indigo-400" size={20} /> 分類架構管理
                </h2>
                <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-full text-slate-400 hover:text-slate-200">
                    <X size={20} />
                </button>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
                    {localCategories.length === 0 && (
                        <div className="text-center py-10 text-slate-500 flex flex-col items-center gap-2">
                            <FolderOpen size={40} strokeWidth={1.5} />
                            <p>尚無分類，請在下方建立第一個分類。</p>
                        </div>
                    )}
                    {renderTree(localCategories)}
                </div>

                {addingChildToId === null && (
                    <div className="p-4 bg-slate-900 border-t border-slate-700">
                        <div className="flex gap-2">
                            <input 
                                value={newCatName}
                                onChange={(e) => setNewCatName(e.target.value)}
                                placeholder="新增主分類..."
                                className="flex-1 bg-slate-800 border border-slate-700 text-slate-200 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
                                onKeyDown={(e) => e.key === 'Enter' && handleAddCategory(null)}
                            />
                            <button 
                                onClick={() => handleAddCategory(null)}
                                disabled={!newCatName.trim()}
                                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50"
                            >
                                <Plus size={18} />
                            </button>
                        </div>
                    </div>
                )}
            </>
        )}
      </div>
    </div>
  );
};

export default CategoryManagerModal;
