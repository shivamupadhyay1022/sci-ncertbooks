import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Download, Bookmark, ChevronLeft, ChevronRight, Bookmark as BookmarkIcon } from 'lucide-react';
import BookCard from '../components/BookCard';

// Sample book data
const featuredBooks = [
  {
    id: 1,
    title: 'Mathematics - Class 10',
    subject: 'Mathematics',
    class: 'Class 10',
    edition: '2023 Edition',
    isNew: true,
    image: 'https://placeholder.com/book-cover-math-10'
  },
  {
    id: 2,
    title: 'Science - Class 9',
    subject: 'Science',
    class: 'Class 9',
    edition: '2023 Edition',
    isNew: true,
    image: 'https://placeholder.com/book-cover-science-9'
  },
  {
    id: 3,
    title: 'Vasant - Class 6',
    subject: 'Hindi',
    class: 'Class 6',
    edition: '2023 Edition',
    isNew: true,
    image: 'https://placeholder.com/book-cover-hindi-6'
  },
  {
    id: 4,
    title: 'Physics Part I - Class 12',
    subject: 'Physics',
    class: 'Class 12',
    edition: '2023 Edition',
    isNew: true,
    image: 'https://placeholder.com/book-cover-physics-12'
  },
  {
    id: 5,
    title: 'Chemistry - Class 11',
    subject: 'Chemistry',
    class: 'Class 11',
    edition: '2023 Edition',
    isNew: false,
    image: 'https://placeholder.com/book-cover-chemistry-11'
  },
  {
    id: 6,
    title: 'Biology - Class 12',
    subject: 'Biology',
    class: 'Class 12',
    edition: '2023 Edition',
    isNew: false,
    image: 'https://placeholder.com/book-cover-biology-12'
  }
];

function Index() {
  const [startIndex, setStartIndex] = useState(0);
  
  const nextSlide = () => {
    setStartIndex((prev) => 
      prev + 4 >= featuredBooks.length ? 0 : prev + 4
    );
  };
  
  const prevSlide = () => {
    setStartIndex((prev) => 
      prev - 4 < 0 ? Math.max(0, featuredBooks.length - 4) : prev - 4
    );
  };
  
  const visibleBooks = featuredBooks.slice(startIndex, startIndex + 4);

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-orange-500">Discover & Learn</span>
          <span className="text-gray-800 dark:text-white"> with NCERT Books</span>
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Access the latest editions of NCERT textbooks and educational resources in one 
          seamless digital experience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
          <Link 
            to="/books" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
          >
            Explore Books
          </Link>
          <Link 
            to="/topics" 
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium py-2 px-6 rounded-md transition-colors duration-300"
          >
            Search by Topic
          </Link>
        </div>
      </div>

            {/* Features Section */}
            <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3 text-gray-800 dark:text-white">
          Everything You Need to Excel
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Designed to enhance your learning experience with an intuitive interface and powerful features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="bg-orange-100 dark:bg-orange-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="text-orange-500" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Latest NCERT Books</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Access the most recent NCERT editions along with previous versions for reference.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="bg-orange-100 dark:bg-orange-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Search className="text-orange-500" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Advanced Search</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Find specific topics across multiple books with our powerful search functionality.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="bg-orange-100 dark:bg-orange-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Download className="text-orange-500" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Offline Access</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Download books for offline reading, ensuring learning continues without internet.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="bg-orange-100 dark:bg-orange-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Bookmark className="text-orange-500" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Bookmarks & Notes</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Highlight important sections and take notes for better comprehension and revision.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="w-full max-w-6xl mx-auto my-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Featured Books
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              aria-label="Previous books"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              aria-label="Next books"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleBooks.map((book) => (
                <BookCard book={book}/>
          ))}
        </div>
      </div>

      {/* Browse by Category Section */}
      <div className="w-full max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Browse by Category
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Primary Category */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 dark:bg-orange-900/20 w-12 h-12 rounded-full flex items-center justify-center">
                <BookOpen className="text-orange-500" size={24} />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2 text-center text-gray-800 dark:text-white">Primary (Class 1-5)</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-4">
              Textbooks for primary school students from Class 1 to Class 5
            </p>
            <div className="flex justify-center">
              <Link to="/books?category=primary" className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center">
                Explore books <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Middle School Category */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 dark:bg-orange-900/20 w-12 h-12 rounded-full flex items-center justify-center">
                <BookOpen className="text-orange-500" size={24} />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2 text-center text-gray-800 dark:text-white">Middle School (Class 6-8)</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-4">
              Textbooks for middle school students from Class 6 to Class 8
            </p>
            <div className="flex justify-center">
              <Link to="/books?category=middle" className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center">
                Explore books <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Secondary Category */}
          <div className="bg-white flex-col h-full justify-between dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 dark:bg-orange-900/20 w-12 h-12 rounded-full flex items-center justify-center">
                <BookOpen className="text-orange-500" size={24} />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2 text-center text-gray-800 dark:text-white">Secondary (Class 9-10)</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-4">
              Textbooks for secondary school students from Class 9 to Class 10
            </p>
            <div className="flex justify-center">
              <Link to="/books?category=secondary" className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center">
                Explore books <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Higher Secondary Category */}
          <div className="bg-white flex-col justify-between dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-100 dark:bg-orange-900/20 w-12 h-12 rounded-full flex items-center justify-center">
                <BookOpen className="text-orange-500" size={24} />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2 text-center text-gray-800 dark:text-white">Higher Secondary (Class 11-12)</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-4">
              Textbooks for higher secondary school students from Class 11 to Class 12
            </p>
            <div className="flex justify-center">
              <Link to="/books?category=higher" className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center">
                Explore books <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Index;
