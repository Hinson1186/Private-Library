import { CategoryDef } from '../types';

/**
 * 遞歸地對分類樹進行排序。
 * 預設使用繁體中文筆劃順序 (zh-TW)，並開啟數字排序。
 */
export const sortCategoriesRecursive = (nodes: CategoryDef[]): CategoryDef[] => {
  return [...nodes]
    .sort((a, b) => a.name.localeCompare(b.name, 'zh-TW', { numeric: true }))
    .map(node => ({
      ...node,
      children: node.children ? sortCategoriesRecursive(node.children) : []
    }));
};

export const findCategoryByName = (nodes: CategoryDef[], name: string): CategoryDef | null => {
    for (const node of nodes) {
        if (node.name === name) return node;
        if (node.children) {
            const found = findCategoryByName(node.children, name);
            if (found) return found;
        }
    }
    return null;
};

export const getAllDescendantNames = (node: CategoryDef): string[] => {
    let names = [node.name];
    if (node.children) {
        node.children.forEach(child => {
            names = names.concat(getAllDescendantNames(child));
        });
    }
    return names;
};

/**
 * 尋找指定分類名稱的父層分類名稱。
 */
export const getParentCategoryName = (nodes: CategoryDef[], childName: string, parentName: string | null = null): string | null => {
    for (const node of nodes) {
        if (node.name === childName) return parentName;
        if (node.children) {
            const result = getParentCategoryName(node.children, childName, node.name);
            if (result) return result;
        }
    }
    return null;
};