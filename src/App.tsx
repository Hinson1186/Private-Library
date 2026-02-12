import React, { useState, useMemo } from 'react';
import { Book } from './types';
import { useLibrary } from './hooks/useLibrary';
import { findCategoryByName, getAllDescendantNames } from './utils/categoryHelpers';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BookGrid from './components/BookGrid';

import AddBookModal from './components/AddBookModal';
import CategoryManagerModal from './components/CategoryManagerModal';
import BookDetailModal from './components/BookDetailModal';
import SettingsModal from './components/SettingsModal';
import BatchMoveModal from './components/BatchMoveModal';
import { Dices, X, FolderOpen, BookHeart, Plus } from 'lucide-react';

const App: React.FC = () => {
  const { 
    books, 
    categories, 
    isLoading, 
    addBook, 
    updateBook, 
    deleteBook, 
    updateCategories, 
    importData,
    batchMove,
    batchDelete
  } = useLibrary();

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryManagerOpen, setIsCategoryManagerOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isBatchMoveOpen, setIsBatchMoveOpen] = useState(false);
  
  // State
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [randomSeed, setRandomSeed] = useState(0); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Batch Mode
  const [isBatchMode, setIsBatchMode] = useState(false);
  const [selectedBookIds, setSelectedBookIds] = useState<Set<string>>(new Set());

  // Helper Functions
  const shuffleBooks = () => {
    setRandomSeed(prev => prev + 1);
  };

  const toggleBatchSelection = (bookId: string) => {
    setSelectedBookIds(prev => {
      const next = new Set(prev);
      if (next.has(bookId)) next.delete(bookId);
      else next.add(bookId);
      return next;
    });
  };

  const handleBatchDelete = () => {
    if (window.confirm(`確定要刪除選取的 ${selectedBookIds.size} 本書籍嗎？`)) {
      batchDelete(selectedBookIds);
      setSelectedBookIds(new Set());
      setIsBatchMode(false);
    }
  };

  const handleBatchMove = (targetCategory: string) => {
    batchMove(selectedBookIds, targetCategory);
    setSelectedBookIds(new Set());
    setIsBatchMode(false);
    setIsBatchMoveOpen(false);
  };

  // View Data Logic (Switch between Folders and Books)
  const viewData = useMemo(() => {
    if (!selectedCategory) {
        // All Books Mode:
        let result = books.filter(book => {
            return book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                   book.author.toLowerCase().includes(searchTerm.toLowerCase());
        });

        const uncategorized = result.filter(b => !b.category || b.category === '未分類');
        const categorized = result.filter(b => b.category && b.category !== '未分類');

        // Shuffle only the categorized ones
        const shuffledCategorized = [...categorized];
        if (randomSeed >= 0) {
            for (let i = shuffledCategorized.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledCategorized[i], shuffledCategorized[j]] = [shuffledCategorized[j], shuffledCategorized[i]];
            }
        }

        // Combine: Uncategorized first, then shuffled categorized
        return { type: 'books' as const, items: [...uncategorized, ...shuffledCategorized] };

    } else {
        const categoryNode = findCategoryByName(categories, selectedCategory);
        
        // If searching, always show flattened books
        if (searchTerm) {
             const allDescendants = categoryNode ? getAllDescendantNames(categoryNode) : [selectedCategory];
             const result = books.filter(book => {
                const matchesSearch = 
                    book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    book.author.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesCategory = allDescendants.includes(book.category);
                return matchesSearch && matchesCategory;
             }).sort((a, b) => a.title.localeCompare(b.title, 'zh-TW', { numeric: true }));
             return { type: 'books' as const, items: result };
        }

        // Folder Logic
        if (categoryNode && categoryNode.children && categoryNode.children.length > 0) {
            // 強制對子分類（如系列名）進行筆劃排序
            const sortedSubCats = [...categoryNode.children].sort((a, b) => 
                a.name.localeCompare(b.name, 'zh-TW', { numeric: true })
            );
            return { type: 'categories' as const, items: sortedSubCats };
        } else {
            // Leaf Category: Show books (sorted by title/volume)
            const result = books
                .filter(book => book.category === selectedCategory)
                .sort((a, b) => a.title.localeCompare(b.title, 'zh-TW', { numeric: true }));
            return { type: 'books' as const, items: result };
        }
    }
  }, [books, searchTerm, selectedCategory, randomSeed, categories]);

  return (
    <div className="h-screen bg-slate-950 text-slate-200 font-inter flex flex-col overflow-hidden">
      <Header 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isBatchMode={isBatchMode}
        setIsBatchMode={setIsBatchMode}
        selectedCount={selectedBookIds.size}
        onSelectAll={() => {
            if (viewData.type === 'books') {
                const ids = viewData.items.map(b => (b as Book).id);
                setSelectedBookIds(new Set(ids));
            }
        }}
        onClearSelection={() => setSelectedBookIds(new Set())}
        onBatchMove={() => setIsBatchMoveOpen(true)}
        onBatchDelete={handleBatchDelete}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenAddModal={() => setIsModalOpen(true)}
      />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            bookCount={books.length}
            onOpenCategoryManager={() => setIsCategoryManagerOpen(true)}
            onOpenSettings={() => setIsSettingsOpen(true)}
        />

        <main className="flex-1 px-4 sm:px-6 overflow-hidden flex flex-col bg-slate-950 relative">
            <div className="flex items-center justify-between mb-2 shrink-0 bg-slate-950/95 backdrop-blur z-30 py-4 border-b border-slate-800/50">
                <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                    {selectedCategory ? (
                        <>
                           <span className="text-indigo-400"><FolderOpen size={20} /></span>
                           {selectedCategory}
                        </>
                    ) : (
                        <>
                           <span className="text-rose-400"><BookHeart size={20} /></span>
                           所有書籍
                        </>
                    )}
                </h2>
                
                <div className="flex items-center gap-2">
                    {!selectedCategory && !isBatchMode && (
                        <button 
                            onClick={shuffleBooks}
                            className="text-xs flex items-center gap-1 text-slate-400 hover:text-indigo-400 bg-slate-800 hover:bg-slate-800/80 px-3 py-1.5 rounded-full transition-colors group"
                            title="隨機排列"
                        >
                            <Dices size={14} className="group-hover:rotate-180 transition-transform duration-500" /> 換一批
                        </button>
                    )}
                    {selectedCategory && (
                        <button 
                            onClick={() => setSelectedCategory(null)}
                            className="text-xs flex items-center gap-1 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-full transition-colors"
                        >
                            <X size={12} /> 清除篩選
                        </button>
                    )}
                </div>
            </div>

            <BookGrid 
                viewData={viewData}
                books={books}
                isBatchMode={isBatchMode}
                selectedBookIds={selectedBookIds}
                onBookClick={setSelectedBook}
                onBatchSelect={toggleBatchSelection}
                onCategoryClick={setSelectedCategory}
                onAddFirstBook={() => setIsModalOpen(true)}
                isLoading={isLoading}
            />
        </main>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="sm:hidden fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-xl shadow-indigo-500/40 flex items-center justify-center hover:bg-indigo-500 z-40 border border-indigo-400/20"
      >
        <Plus size={28} />
      </button>

      <AddBookModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={addBook} categories={categories} />
      <CategoryManagerModal isOpen={isCategoryManagerOpen} onClose={() => setIsCategoryManagerOpen(false)} categories={categories} onUpdateCategories={updateCategories} />
      <BookDetailModal isOpen={!!selectedBook} onClose={() => setSelectedBook(null)} book={selectedBook} categories={categories} onUpdate={updateBook} onDelete={deleteBook} />
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} books={books} categories={categories} onImport={importData} />
      <BatchMoveModal isOpen={isBatchMoveOpen} onClose={() => setIsBatchMoveOpen(false)} selectedCount={selectedBookIds.size} categories={categories} onConfirm={handleBatchMove} />
    </div>
  );
};

export default App;