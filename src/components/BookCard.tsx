import React from 'react';
import { Book } from '../types';
import { CheckCircle2, Circle } from 'lucide-react';

interface BookCardProps {
  book: Book;
  onClick: (book: Book) => void;
  isSelectable?: boolean;
  isSelected?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ 
  book, 
  onClick, 
  isSelectable = false, 
  isSelected = false 
}) => {
  const displayCover = book.coverUrl && book.coverUrl.length > 0 
    ? book.coverUrl 
    : `https://picsum.photos/seed/${book.id}/300/450`;

  const handleClick = (e: React.MouseEvent) => {
    if (isSelectable) {
      e.stopPropagation(); 
    }
    onClick(book);
  };

  return (
    <div 
      onClick={handleClick}
      className={`group relative bg-slate-800 rounded-lg shadow-lg border overflow-hidden transition-all duration-300 flex flex-col h-full cursor-pointer
        ${isSelected 
          ? 'border-indigo-500 ring-2 ring-indigo-500/50 translate-y-[-4px] shadow-indigo-500/20' 
          : 'border-slate-700 hover:shadow-indigo-500/20 hover:border-indigo-500/40 hover:-translate-y-1'
        }
      `}
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-700">
        <img 
          src={displayCover} 
          alt={book.title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${!isSelectable && 'group-hover:scale-105'}`}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${book.id}/300/450`;
          }}
        />
        
        {/* Selection Overlay */}
        {isSelectable && (
          <div className={`absolute inset-0 transition-colors ${isSelected ? 'bg-indigo-900/40' : 'bg-black/0 group-hover:bg-black/10'}`}>
            <div className="absolute top-2 right-2">
              {isSelected ? (
                <div className="bg-indigo-500 text-white rounded-full p-0.5 shadow-lg">
                  <CheckCircle2 size={24} fill="currentColor" className="text-white" />
                </div>
              ) : (
                <div className="bg-slate-900/50 text-slate-300 rounded-full p-0.5 backdrop-blur-sm border border-slate-500/50 hover:bg-slate-800 hover:border-indigo-400">
                   <Circle size={24} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="p-3 flex flex-col flex-grow bg-slate-800">
        <div className="mb-1">
          <h3 className="font-bold text-slate-100 text-sm leading-snug line-clamp-2 mb-0.5 group-hover:text-indigo-300 transition-colors" title={book.title}>
            {book.title}
          </h3>
          <p className="text-slate-400 text-xs font-medium line-clamp-1">{book.author}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;