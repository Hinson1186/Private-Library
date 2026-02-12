import { GoogleGenAI, Type, Schema } from "@google/genai";
import { AISearchResult } from "../types";

// 安全地獲取 API Key，如果沒有則為空字串
const apiKey = process.env.API_KEY;

// 只有在有 Key 的時候才初始化 AI
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const bookSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "書籍的完整標題 (繁體中文)" },
    author: { type: Type.STRING, description: "作者姓名 (繁體中文)" },
    genre: { type: Type.STRING, description: "書籍的主要類型標籤 (例如：科幻、歷史、商業)。" },
    category: { type: Type.STRING, description: "廣義的主分類 (例如：文學小說、社會科學、自然科普、商業理財、藝術設計)。" },
    subCategory: { type: Type.STRING, description: "較為具體的子分類 (例如：翻譯文學、心理學、物理化學、投資理財)。" },
  },
  required: ["title", "author", "genre", "category"],
};

export const identifyBook = async (query: string): Promise<AISearchResult> => {
  // 如果沒有 AI 實例 (代表沒有 Key)，直接拋出錯誤
  if (!ai) {
    throw new Error("系統未設定 API KEY，無法使用 AI 搜尋功能。請使用手動輸入模式。");
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `識別此搜尋查詢的書籍： "${query}"。
      如果查詢模糊，請根據最可能的書籍進行猜測。
      請務必以「繁體中文」回傳所有文字內容（書名、作者、分類等）。
      對於 category (主分類) 和 subCategory (子分類)，請給予圖書館或書店常見的分類建議。
      不需要 ISBN、簡介或出版年份。`,
      config: {
        responseMimeType: "application/json",
        responseSchema: bookSchema,
        temperature: 0.3,
      },
    });

    const text = response.text;
    if (!text) throw new Error("AI 無法回應");

    const data = JSON.parse(text) as AISearchResult;
    return data;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};