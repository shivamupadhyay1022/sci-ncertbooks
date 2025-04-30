import React, { useState } from 'react';
import { Search } from 'lucide-react';
import BlogCard from '../components/BlogCard';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'Effective Study Strategies for NCERT Books',
    excerpt: 'Learn how to maximize your learning from NCERT textbooks with proven study techniques.',
    date: 'May 12, 2023',
    readTime: '5 min',
    author: 'Amit Srivastav',
    authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
    category: 'Study Tips'
  },
  {
    id: 2,
    title: 'Understanding Organic Chemistry Mechanisms',
    excerpt: 'A visual guide to mastering reaction mechanisms in organic chemistry.',
    date: 'April 28, 2023',
    readTime: '7 min',
    author: 'Prof. Rita Sharma',
    authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69',
    category: 'Chemistry'
  },
  {
    id: 3,
    title: 'Digital Tools to Complement NCERT Learning',
    excerpt: 'Enhance your textbook studies with these helpful digital resources.',
    date: 'March 15, 2023',
    readTime: '4 min',
    author: 'Vikram Patel',
    authorImage: 'https://randomuser.me/api/portraits/men/67.jpg',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
    category: 'EdTech'
  },
  {
    id: 4,
    title: 'Mastering Mathematics: Problem-Solving Techniques',
    excerpt: 'Step-by-step approaches to tackle complex math problems in NCERT textbooks.',
    date: 'February 22, 2023',
    readTime: '6 min',
    author: 'Dr. Priya Mehta',
    authorImage: 'https://randomuser.me/api/portraits/women/22.jpg',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    category: 'Mathematics'
  },
  {
    id: 5,
    title: 'Preparing for Board Exams with NCERT Materials',
    excerpt: 'A comprehensive guide to using NCERT books effectively for board exam preparation.',
    date: 'January 18, 2023',
    readTime: '8 min',
    author: 'Rajesh Kumar',
    authorImage: 'https://randomuser.me/api/portraits/men/45.jpg',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
    category: 'Exam Prep'
  },
  {
    id: 6,
    title: 'The Science of Learning: Memory Techniques',
    excerpt: 'Research-backed methods to improve retention and recall for better academic performance.',
    date: 'December 5, 2022',
    readTime: '5 min',
    author: 'Dr. Sanjay Gupta',
    authorImage: 'https://randomuser.me/api/portraits/men/77.jpg',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
    category: 'Learning Science'
  }
];

// Categories for filtering
const categories = ['All', 'Study Tips', 'Chemistry', 'EdTech', 'Mathematics', 'Exam Prep', 'Learning Science'];

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBlogs = blogPosts.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Educational <span className="text-orange-500">Blog</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Insights, tips, and updates from our education experts to help you excel in your studies and
          stay informed about educational topics.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300">No articles found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

export default Blog;