import { Book, CategoryDef } from "../types";

/**
 * 智能導出功能
 * 將目前的書籍資料轉換為 TypeScript 程式碼
 * 自動將同系列的書籍壓縮為 createSeries 呼叫
 * 保留封面圖片的 Map
 */
export const exportData = (books: Book[], categories: CategoryDef[]) => {
  // 1. 分組書籍
  const groupedBooks = new Map<string, Book[]>(); // Key: "Category|Author|TitleBase"
  const singles: Book[] = [];

  books.forEach(book => {
    // 簡單判斷：是否有集數 (結尾是數字)
    // Regex: 抓取標題主體 (group 1) 和 數字 (group 2)，允許結尾有空白
    // 假設格式是 "書名 1", "書名 2" 或 "書名1", "書名2"
    const match = book.title.match(/^(.*?)(\d+)\s*$/);
    
    if (match && book.category) {
        const titleBase = match[1].trim();
        const key = `${book.category}|${book.author}|${titleBase}`;
        
        if (!groupedBooks.has(key)) {
            groupedBooks.set(key, []);
        }
        groupedBooks.get(key)!.push(book);
    } else {
        singles.push(book);
    }
  });

  // 2. 產生 createSeries 程式碼區塊
  const seriesCodeBlocks: string[] = [];
  
  groupedBooks.forEach((group, key) => {
     // 如果同組只有一本，或是標題差異太大，就當作單本處理
     if (group.length < 2) {
         group.forEach(b => singles.push(b));
         return;
     }

     const [category, author, titleBase] = key.split('|');
     
     // 提取集數與 ID 前綴
     const volumes: number[] = [];
     const covers: Record<number, string> = {};
     let idBaseCandidate = '';
     let consistentIdBase = true;

     // 排序以確保 volumes 順序好看
     group.sort((a, b) => {
         const volA = parseInt(a.title.match(/(\d+)\s*$/)?.[1] || '0');
         const volB = parseInt(b.title.match(/(\d+)\s*$/)?.[1] || '0');
         return volA - volB;
     });

     group.forEach(book => {
         const volMatch = book.title.match(/(\d+)\s*$/);
         if (volMatch) {
             const vol = parseInt(volMatch[1]);
             volumes.push(vol);
             
             if (book.coverUrl) {
                 covers[vol] = book.coverUrl;
             }

             // 嘗試推斷 idBase (例如: rent-gf-1 => rent-gf)
             const parts = book.id.split('-');
             if (parts.length > 1) {
                 // 移除最後一段當作數字
                 const currentBase = parts.slice(0, -1).join('-');
                 const lastPart = parts[parts.length - 1];
                 // 簡單檢查結尾是否為數字 (不一定是集數，但通常是 pattern)
                 if (!isNaN(parseInt(lastPart))) {
                      if (idBaseCandidate === '') idBaseCandidate = currentBase;
                      else if (idBaseCandidate !== currentBase) consistentIdBase = false;
                 } else {
                    consistentIdBase = false;
                 }
             } else {
                 consistentIdBase = false; // 沒有分隔符
             }
         }
     });

     // 如果 ID 生成不一致，建議保留空字串，讓它自動生成 UUID，或者手動填寫
     // 這裡我們傾向於產生乾淨的代碼，如果原有的 ID 很亂，為了壓縮，我們可能會犧牲 ID 的持久性
     // 但如果是匯出備份，這點需要注意。
     // 這裡的邏輯是：只要有 candidate 就用，否則留空讓使用者填
     const idBaseStr = consistentIdBase && idBaseCandidate ? `    idBase: "${idBaseCandidate}",` : `    idBase: "${crypto.randomUUID().slice(0, 8)}", // 自動生成`;
     
     let coversStr = '';
     if (Object.keys(covers).length > 0) {
         coversStr = `\n    covers: {\n${Object.entries(covers).map(([vol, url]) => `      ${vol}: "${url}"`).join(',\n')}\n    },`;
     }

     const block = `
  ...createSeries({
    title: "${titleBase}",
    author: "${author}",
    category: "${category}",
${idBaseStr}
    volumes: [${volumes.join(', ')}],${coversStr}
  })`;
     seriesCodeBlocks.push(block);
  });

  // 3. 產生單本書籍程式碼
  const singleCodeBlocks = singles.map(b => {
      const coverArg = b.coverUrl ? `    "${b.coverUrl}"` : '';
      return `  createBook(
    "${b.title}",
    "${b.author}",
    "${b.category}",
    "${b.id}"${coverArg ? ',\n' + coverArg : ''}
  )`;
  });

  // 4. 組合最終檔案內容
  const content = `
import { Book, CategoryDef } from '@/types';
import { createBook, createSeries } from '@/utils/bookFactory';

/**
 * 這裡是您的「永久資料庫」。
 * 如果您希望某些書籍或分類在清除瀏覽器快取後仍然存在，
 * 請將您備份的 JSON 資料內容填入這裡。
 * 
 * 此檔案由「設定 > 匯出資料」自動生成。
 */

export const initialCategories: CategoryDef[] = ${JSON.stringify(categories, null, 2)};

export const initialBooks: Book[] = [
  // --- 單本或未整理書籍 ---
${singleCodeBlocks.join(',\n')}

  // --- 系列書籍 (使用 createSeries 壓縮) ---
${seriesCodeBlocks.join(',\n')}
];
`;

  const blob = new Blob([content.trim()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `initialData.ts`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const exportTypeScriptFile = exportData;

export const importData = (file: File): Promise<{ books: Book[], categories: CategoryDef[] }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        
        // 檢查是否為程式碼格式
        if (content.includes('createSeries') || content.includes('createBook')) {
             reject(new Error("您上傳的是 TypeScript 原始碼檔案 (initialData.ts)。\n\n基於安全限制，瀏覽器無法直接解析此檔案來進行「即時匯入」。\n\n請將此檔案覆蓋您專案中的 `data/initialData.ts`，然後重新整理頁面即可套用變更。"));
             return;
        }

        let books: Book[] = [];
        let categories: CategoryDef[] = [];

        // 嘗試解析舊版 JSON 備份 (雖然現在 exportData 輸出 TS，但保留此功能以兼容舊備份)
        if (content.includes('export const initialBooks') || content.includes('export const initialCategories')) {
            const catMatch = content.match(/export const initialCategories: CategoryDef\[\] = (\[[\s\S]*?\]);/);
            const bookMatch = content.match(/export const initialBooks: Book\[\] = (\[[\s\S]*?\]);/);

            if (catMatch && catMatch[1]) {
                categories = JSON.parse(catMatch[1]);
            }
            if (bookMatch && bookMatch[1]) {
                books = JSON.parse(bookMatch[1]);
            }
        } else {
            const data = JSON.parse(content);
            if (Array.isArray(data)) {
                books = data as Book[];
            } else if (data.books) {
                books = data.books;
                if (data.categories) categories = data.categories;
            }
        }

        // 確保 ID 存在
        if (categories.length > 0 && typeof categories[0] === 'string') {
            categories = (categories as any as string[]).map(name => ({
              id: crypto.randomUUID(),
              name: name,
              children: []
            }));
        }

        const patchCategoryIds = (cats: any[]): CategoryDef[] => {
            return cats.map(cat => ({
                id: cat.id || crypto.randomUUID(),
                name: cat.name || '未命名',
                children: Array.isArray(cat.children) ? patchCategoryIds(cat.children) : []
            }));
        };
        categories = patchCategoryIds(categories);

        resolve({ books, categories });
      } catch (err) {
        console.error("Import Error:", err);
        if (err instanceof Error && err.message.includes("TypeScript")) {
            reject(err);
        } else {
            reject(new Error("無法解析檔案格式。請確認您上傳的是 JSON 備份檔。若要套用 initialData.ts，請直接覆蓋專案檔案。"));
        }
      }
    };
    
    reader.onerror = () => reject(new Error("無法讀取檔案"));
    reader.readAsText(file);
  });
};