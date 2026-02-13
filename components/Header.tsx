import React from 'react';
import { Search, BookHeart, Plus, Nut, CheckSquare, ArrowRightLeft, Trash2, Menu } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isBatchMode: boolean;
  setIsBatchMode: (mode: boolean) => void;
  selectedCount: number;
  onSelectAll: () => void;
  onClearSelection: () => void;
  onBatchMove: () => void;
  onBatchDelete: () => void;
  onOpenSettings: () => void;
  onOpenAddModal: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onToggleSidebar,
  searchTerm,
  setSearchTerm,
  isBatchMode,
  setIsBatchMode,
  selectedCount,
  onSelectAll,
  onClearSelection,
  onBatchMove,
  onBatchDelete,
  onOpenSettings,
  onOpenAddModal
}) => {
  return (
    <header className="shrink-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="w-full px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 shrink-0">
           <button 
              onClick={onToggleSidebar}
              className="lg:hidden p-2 text-slate-400 hover:bg-slate-800 rounded-lg"
           >
              <Menu size={24} />
           </button>
          <div className="bg-rose-500/10 p-2 rounded-xl text-rose-400 border border-rose-500/20">
            <BookHeart size={24} />
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-indigo-400 hidden sm:block tracking-wide">
            輕．文庫
          </h1>
        </div>
        
        <div className="flex-1 max-w-2xl mx-auto flex items-center gap-4">
          <div className="relative group flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
              <Search size={18} />
              </div>
              <input
              type="text"
              placeholder="搜尋藏書..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-xl leading-5 bg-slate-900/50 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-slate-900 sm:text-sm transition-all"
              />
          </div>
          
          <button 
              onClick={() => {
                  setIsBatchMode(!isBatchMode);
                  if (isBatchMode) onClearSelection();
              }}
              className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all ${
                  isBatchMode 
                  ? 'bg-indigo-600 text-white border-indigo-500' 
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
              }`}
              title="批次管理"
          >
              <CheckSquare size={16} />
              <span className="text-sm font-medium">多選</span>
          </button>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
              onClick={onOpenSettings}
              className="p-2 text-slate-400 hover:bg-slate-800 hover:text-indigo-400 rounded-lg transition-colors hidden sm:block"
              title="設定與備份"
          >
              <Nut size={22} />
          </button>
          <button
              onClick={onOpenAddModal}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all text-sm font-medium shadow-lg hover:shadow-indigo-500/25"
          >
              <Plus size={18} />
              <span className="hidden sm:inline">入庫</span>
          </button>
        </div>
      </div>
      
      {isBatchMode && (
          <div className="w-full bg-indigo-900/30 border-b border-indigo-500/30 px-4 py-2 flex items-center justify-between animate-in slide-in-from-top-2">
              <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-indigo-300">已選取 {selectedCount} 本</span>
                  <button onClick={onSelectAll} className="text-xs text-indigo-400 hover:text-white hover:underline">全選</button>
                  <button onClick={onClearSelection} className="text-xs text-indigo-400 hover:text-white hover:underline">取消選取</button>
              </div>
              <div className="flex items-center gap-2">
                  <button 
                      disabled={selectedCount === 0}
                      onClick={onBatchMove}
                      className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm border border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                      <ArrowRightLeft size={14} /> 移動
                  </button>
                  <button 
                      disabled={selectedCount === 0}
                      onClick={onBatchDelete}
                      className="flex items-center gap-1.5 px-3 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded-lg text-sm border border-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                      <Trash2 size={14} /> 刪除
                  </button>
              </div>
          </div>
      )}
    </header>
  );
};

export default Header;
