import React from "react";
import { BookOpen, BookmarkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
function BookCard({ book }) {
    const navigate = useNavigate()
  return (
    <div onClick={()=>{navigate(`/books/${book.id}`)}}  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
        {/* Placeholder for book cover image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
          <BookOpen size={48} />
        </div>

        {/* New Edition badge */}
        {book.isNew && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            New Edition
          </div>
        )}

        {/* Bookmark button */}
        <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300">
          <BookmarkIcon size={16} />
        </button>
      </div>

      <div className="p-4 flex-grow">
        <div className="flex gap-2 mb-1">
          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">
            {book.class}
          </span>
          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">
            {book.subject}
          </span>
        </div>
        <h3 className="font-bold text-gray-800 dark:text-white mb-1">
          {book.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {book.edition}
        </p>
      </div>
    </div>
  );
}

export default BookCard;
