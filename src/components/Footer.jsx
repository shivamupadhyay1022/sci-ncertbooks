import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-orange-500" size={24} />
              <div className="flex flex-col">
                <span className="text-orange-500 font-bold text-xl">NCERT Books</span>
                <span className="text-gray-500 dark:text-gray-400 text-xs">by ChemistryForum</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Access the latest NCERT textbooks and educational resources in one seamless digital experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-gray-800 dark:text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/books?category=primary" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                  Primary (Class 1-5)
                </Link>
              </li>
              <li>
                <Link to="/books?category=middle" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                  Middle School (Class 6-8)
                </Link>
              </li>
              <li>
                <Link to="/books?category=secondary" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                  Secondary (Class 9-10)
                </Link>
              </li>
              <li>
                <Link to="/books?category=higher" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                  Higher Secondary (Class 11-12)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-800 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-orange-500 mr-2 mt-0.5" size={18} />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  NCERT Campus, Sri Aurobindo Marg, New Delhi-110016
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-orange-500 mr-2" size={18} />
                <span className="text-gray-600 dark:text-gray-300 text-sm">+91 11 2696 2580</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-orange-500 mr-2" size={18} />
                <span className="text-gray-600 dark:text-gray-300 text-sm">info@ncertbooks.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} NCERT Books by ChemistryForum. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;