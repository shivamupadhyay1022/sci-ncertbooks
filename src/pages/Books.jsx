import React, { useState } from 'react';
import { Search, BookOpen, Filter } from 'lucide-react';
import BookCard from '../components/BookCard';
import BookHierarchy from '../components/BookHierarchy';

// Sample book data organized by categories
const booksByCategory = {
  primary: [
    {
      id: 101,
      title: 'English - Class 3',
      subject: 'English',
      class: 'Class 3',
      edition: '2023 Edition',
      isNew: true,
      image: 'https://placeholder.com/book-cover-english-3'
    },
    {
      id: 102,
      title: 'Mathematics - Class 5',
      subject: 'Mathematics',
      class: 'Class 5',
      edition: '2023 Edition',
      isNew: true,
      image: 'https://placeholder.com/book-cover-math-5'
    },
    // More primary books...
  ],
  middle: [
    {
      id: 201,
      title: 'Science - Class 7',
      subject: 'Science',
      class: 'Class 7',
      edition: '2023 Edition',
      isNew: true,
      image: 'https://placeholder.com/book-cover-science-7'
    },
    {
      id: 202,
      title: 'Social Studies - Class 8',
      subject: 'Social Studies',
      class: 'Class 8',
      edition: '2023 Edition',
      isNew: false,
      image: 'https://placeholder.com/book-cover-social-8'
    },
    // More middle school books...
  ],
  secondary: [
    {
      id: 301,
      title: 'Mathematics - Class 10',
      subject: 'Mathematics',
      class: 'Class 10',
      edition: '2023 Edition',
      isNew: true,
      image: 'https://placeholder.com/book-cover-math-10'
    },
    {
      id: 302,
      title: 'Science - Class 9',
      subject: 'Science',
      class: 'Class 9',
      edition: '2023 Edition',
      isNew: true,
      image: 'https://placeholder.com/book-cover-science-9'
    },
    // More secondary books...
  ],
  higher: [
    {
      id: 401,
      title: 'Physics Part I - Class 12',
      subject: 'Physics',
      class: 'Class 12',
      edition: '2023 Edition',
      isNew: true,
      image: 'https://placeholder.com/book-cover-physics-12'
    },
    {
      id: 402,
      title: 'Chemistry - Class 11',
      subject: 'Chemistry',
      class: 'Class 11',
      edition: '2023 Edition',
      isNew: false,
      image: 'https://placeholder.com/book-cover-chemistry-11'
    },
    // More higher secondary books...
  ]
};

// Subjects for filtering
const subjects = ['All', 'Mathematics', 'Science', 'English', 'Hindi', 'Social Studies', 'Physics', 'Chemistry', 'Biology'];

function Books() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [activeCategory, setActiveCategory] = useState('primary');

  // Filter books based on search term and selected subject
  const filterBooks = (books) => {
    return books.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSubject = selectedSubject === 'All' || book.subject === selectedSubject;
      return matchesSearch && matchesSubject;
    });
  };

  const filteredBooks = filterBooks(booksByCategory[activeCategory] || []);

  return (
    <div className="max-w-7xl mx-auto py-8">
      {/* Hero Section */}
      <div className="relative mb-12 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-50 to-orange-100 dark:from-gray-800 dark:via-gray-900 dark:to-orange-900/30 opacity-90"></div>
        <div className="relative z-10 px-8 py-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Discover <span className="text-orange-500">NCERT Books</span></h1>
          <p className="text-lg max-w-2xl mb-6 text-gray-600 dark:text-gray-300">
            Explore our comprehensive collection of NCERT textbooks for all classes and subjects.
            Start your learning journey today!
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search for books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <Search className="absolute left-3 top-3.5 text-gray-500" size={18} />
            </div>
            <div className="relative">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="appearance-none w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 pr-10 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
              <Filter className="absolute right-3 top-3.5 text-gray-500" size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="mb-8">
        <div className="flex overflow-x-auto pb-2 space-x-2">
          <button
            onClick={() => setActiveCategory('primary')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeCategory === 'primary'
                ? 'bg-orange-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Primary (Class 1-5)
          </button>
          <button
            onClick={() => setActiveCategory('middle')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeCategory === 'middle'
                ? 'bg-orange-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Middle School (Class 6-8)
          </button>
          <button
            onClick={() => setActiveCategory('secondary')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeCategory === 'secondary'
                ? 'bg-orange-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Secondary (Class 9-10)
          </button>
          <button
            onClick={() => setActiveCategory('higher')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
              activeCategory === 'higher'
                ? 'bg-orange-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Higher Secondary (Class 11-12)
          </button>
        </div>
      </div>

      {/* Category Title */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {activeCategory === 'primary' && 'Primary School Books'}
          {activeCategory === 'middle' && 'Middle School Books'}
          {activeCategory === 'secondary' && 'Secondary School Books'}
          {activeCategory === 'higher' && 'Higher Secondary Books'}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {filteredBooks.length} books found
        </p>
      </div>

      {/* Books Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <BookOpen className="text-orange-500" size={48} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">No books found</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      )}

      {/* Firebase Book Hierarchy */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Browse Books by Hierarchy
        </h2>
        <BookHierarchy />
      </div>

      {/* Featured Section */}
      <div className="mt-16">
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                New to NCERT Books?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Discover why millions of students trust NCERT textbooks for their academic excellence.
                Our digital platform makes learning accessible anytime, anywhere.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute top-0 right-0 w-48 h-64 bg-orange-100 dark:bg-orange-900/20 rounded-lg transform rotate-6"></div>
                <div className="absolute top-0 right-0 w-48 h-64 bg-orange-200 dark:bg-orange-800/20 rounded-lg transform -rotate-3"></div>
                <div className="absolute top-0 right-0 w-48 h-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center">
                  <BookOpen className="text-orange-500" size={64} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
