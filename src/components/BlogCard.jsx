import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2 gap-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{blog.readTime} read</span>
          </div>
        </div>
        
        <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">{blog.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{blog.excerpt}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-2">
              <img src={blog.authorImage} alt={blog.author} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">{blog.author}</span>
          </div>
          <Link to={`/blog/${blog.id}`} className="text-orange-500 hover:text-orange-600 text-sm font-medium">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;