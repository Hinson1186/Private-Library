
import { useState, useEffect } from 'react';
import { Book, BookDraft, CategoryDef } from '../types';
import { initialBooks, initialCategories } from '../data/initialData';

// 當您大幅更新 initialData.ts 並希望所有人都能看到最新內容時，請提升這裡的版本號（例如 v18 -> v19）
// 這會強制程式忽略舊的瀏覽器暫存，重新載入 initialData.ts 內的資料。
const STORAGE_KEY = 'ai-library-books-v19'; 
const CATEGORIES_KEY = 'ai-library-categories-tree-v19'; 

export const useLibrary = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [categories, setCategories] = useState<CategoryDef[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
        const savedBooks = localStorage.getItem(STORAGE_KEY);
        const savedCategories = localStorage.getItem(CATEGORIES_KEY);
        let loadedBooks: Book[] = [];
        let loadedCategories: CategoryDef[] = [];
        let hasLocalData = false;

        if (savedBooks) {
            try {
                loadedBooks = JSON.parse(savedBooks);
                if (loadedBooks.length > 0) hasLocalData = true;
            } catch (e) {
                console.error("Failed to parse books", e);
            }
        }
        if (savedCategories) {
            try {
                loadedCategories = JSON.parse(savedCategories);
                if (loadedCategories.length > 0) hasLocalData = true;
            } catch (e) {
                console.error("Failed to parse categories", e);
            }
        }
        
        // 如果瀏覽器沒有暫存資料，就直接從您提供的 initialData.ts 載入
        if (!hasLocalData || loadedBooks.length === 0) {
            loadedBooks = initialBooks;
        }
        if (loadedCategories.length === 0) {
             loadedCategories = initialCategories;
        }
        
        setBooks(loadedBooks);
        setCategories(loadedCategories);
        setIsLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    }
  }, [books, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
    }
  }, [categories, isLoading]);

  const addBook = (draft: BookDraft) => {
    const newBook: Book = {
      ...draft,
      id: crypto.randomUUID(),
      addedAt: Date.now()
    };
    setBooks(prev => [newBook, ...prev]);
  };

  const updateBook = (updatedBook: Book) => {
    setBooks(prev => prev.map(b => b.id === updatedBook.id ? updatedBook : b));
  };

  const deleteBook = (id: string) => {
    setBooks(prev => prev.filter(b => b.id !== id));
  };

  const updateCategories = (newCats: CategoryDef[]) => {
    setCategories(newCats);
  };

  const importData = (newBooks: Book[], newCats: CategoryDef[]) => {
    setBooks(newBooks);
    setCategories(newCats);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newBooks));
    localStorage.setItem(CATEGORIES_KEY, JSON.stringify(newCats));
  };

  const batchMove = (bookIds: Set<string>, targetCategory: string) => {
    setBooks(prev => prev.map(b => bookIds.has(b.id) ? { ...b, category: targetCategory } : b));
  };

  const batchDelete = (bookIds: Set<string>) => {
    setBooks(prev => prev.filter(b => !bookIds.has(b.id)));
  };

  return {
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
  };
};
