import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Download, Share } from 'lucide-react';

function BookDetail() {
  // This would typically come from route params or context
  const book = {
    id: 1,
    title: 'Mathematics - Class 10',
    subject: 'Mathematics',
    class: 'Class 10',
    edition: '2023 Edition',
    description: 'This mathematics textbook for Class 10 covers algebra, geometry, trigonometry, and more, following the latest NCERT curriculum.',
    isNew: true,
    image: 'https://placeholder.com/book-cover-math-10'
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Back navigation */}
      <Link to="/books" className="inline-flex items-center text-gray-600 dark:text-gray-300 mb-6">
        ← Back to Books
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Book cover */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg aspect-[3/4] relative overflow-hidden">
              <img 
                src={book.image} 
                alt={book.title}
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.parentNode.innerHTML = `<div class="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400"><BookOpen size={48} /></div>`;
                }}
              />
              {book.isNew && (
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  New Edition
                </div>
              )}
            </div>
          </div>

          {/* Book details */}
          <div className="flex-1">
            <div className="flex gap-2 mb-2">
              <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">
                {book.class}
              </span>
              <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">
                {book.subject}
              </span>
              <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">
                {book.edition}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{book.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">{book.description}</p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 flex items-center gap-2">
                <BookOpen size={18} />
                Start Reading
              </button>
              <button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium py-2 px-6 rounded-md transition-colors duration-300 flex items-center gap-2">
                <Download size={18} />
                Download
              </button>
              <button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium py-2 px-6 rounded-md transition-colors duration-300 flex items-center gap-2">
                <Share size={18} />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* What's Inside section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">What's Inside</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="bg-orange-100 dark:bg-orange-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="text-orange-500" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Interactive Chapters</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Engage with content through interactive elements and visual aids.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="bg-orange-100 dark:bg-orange-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Download className="text-orange-500" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Offline Access</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Download chapters or the entire book for offline reading.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="bg-orange-100 dark:bg-orange-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Share className="text-orange-500" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Easy Sharing</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Share important sections with classmates and study groups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;