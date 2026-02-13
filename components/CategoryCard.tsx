import React from 'react';
import { CategoryDef, Book } from '../types';
import { Folder, ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  category: CategoryDef;
  representativeBook?: Book;
  bookCount: number;
  onClick: (categoryName: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, representativeBook, bookCount, onClick }) => {
  const displayCover = representativeBook?.coverUrl && representativeBook.coverUrl.length > 0
    ? representativeBook.coverUrl
    : null;

  return (
    <div 
      onClick={() => onClick(category.name)}
      className="group relative bg-slate-800 rounded-lg shadow-lg border border-slate-700 overflow-hidden hover:shadow-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col h-full"
    >
      {/* Cover Area - Maintains 2:3 Aspect Ratio */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-700 shrink-0">
        {displayCover ? (
          <img 
            src={displayCover} 
            alt={category.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-slate-600">
            <Folder size={48} strokeWidth={1.5} />
          </div>
        )}
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
      </div>
      
      {/* Content Area - The box at the bottom */}
      <div className="p-3 flex flex-col flex-grow bg-slate-800 border-t border-slate-700/50">
        <h3 className="font-bold text-slate-100 text-sm leading-snug line-clamp-2 mb-1 group-hover:text-indigo-300 transition-colors" title={category.name}>
          {category.name}
        </h3>
        
        <div className="flex items-center justify-between mt-auto pt-1">
           <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
             {bookCount} 本藏書
           </span>
           <div className="text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all">
             <ChevronRight size={14} />
           </div>
        </div>
      </div>
      
      {/* Decorative Gradient Line (Top) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default CategoryCard;