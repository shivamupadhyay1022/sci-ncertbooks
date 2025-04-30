import { useState, useEffect } from 'react';
import { Search, Moon, Sun, Menu, X,BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import NCERTLogo from '../assets/ncert-logo.svg'; // Ensure you have this logo file

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Check system preference for dark mode on initial load
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 pt-2 shadow-md sticky top-0 z-50 transition-colors duration-300">
      {/* History banner */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <div className="flex items-center ">
            <Link to="/" className="flex items-center gap-2 justify-center">
            <BookOpen className='text-orange-500' />
              <div className="flex flex-col">
                <span className="text-orange-500 font-bold text-xl">NCERT Books</span>
                <span className="text-gray-500 dark:text-gray-400 text-xs">by ChemistryForum</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/resources" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium">Resources</Link>
              <Link to="/blog" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
              <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
            
            {/* Search bar */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search books..."
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md pl-3 pr-10 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-48"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
                <Search size={18} />
              </button>
            </form>
            
            {/* Theme toggle */}
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Search button for mobile */}
            <button className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 mr-1">
              <Search size={20} />
            </button>
            
            {/* Theme toggle for mobile */}
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 mr-1"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Menu toggle */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/resources" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium">Resources</Link>
            <Link to="/blog" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
          <div className="px-4 py-3">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search books..."
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-md pl-3 pr-10 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
                <Search size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;