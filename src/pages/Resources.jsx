import React from 'react';
import { FileText, Video, BookOpen, Calendar, Download } from 'lucide-react';

function Resources() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Educational Resources
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Enhance your learning with our curated collection of supplementary materials designed to
          complement NCERT books and help you excel in your studies.
        </p>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Study Notes */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full mr-3">
              <FileText className="text-orange-500" size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Study Notes</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
            Comprehensive notes for quick revision
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Chemistry Class 12 Notes</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Download size={16} />
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Physics Class 11 Formulas</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Download size={16} />
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Biology Diagrams Collection</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Download size={16} />
              </a>
            </div>
          </div>
          
          <a href="#" className="block text-center text-sm text-orange-500 hover:text-orange-600 font-medium py-2 border-t border-gray-100 dark:border-gray-700">
            View All Study Notes
          </a>
        </div>

        {/* Video Lectures */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full mr-3">
              <Video className="text-orange-500" size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Video Lectures</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
            Visual learning resources for complex topics
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Organic Chemistry Mechanisms</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Video size={16} />
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Quantum Mechanics Explained</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Video size={16} />
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Cell Division Visualization</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Video size={16} />
              </a>
            </div>
          </div>
          
          <a href="#" className="block text-center text-sm text-orange-500 hover:text-orange-600 font-medium py-2 border-t border-gray-100 dark:border-gray-700">
            Browse Video Library
          </a>
        </div>

        {/* Practice Tests */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full mr-3">
              <BookOpen className="text-orange-500" size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Practice Tests</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
            Self-assessment quizzes and sample papers
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Class 10 Science Sample Paper</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Download size={16} />
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Mathematics Chapter Tests</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Download size={16} />
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">English Grammar Practice</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Download size={16} />
              </a>
            </div>
          </div>
          
          <a href="#" className="block text-center text-sm text-orange-500 hover:text-orange-600 font-medium py-2 border-t border-gray-100 dark:border-gray-700">
            View All Practice Materials
          </a>
        </div>

        {/* Reference Materials */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full mr-3">
              <FileText className="text-orange-500" size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Reference Materials</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
            Additional resources for deeper understanding
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Periodic Table Handbook</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Download size={16} />
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Mathematical Formulas Guide</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Download size={16} />
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Historical Timeline Charts</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Download size={16} />
              </a>
            </div>
          </div>
          
          <a href="#" className="block text-center text-sm text-orange-500 hover:text-orange-600 font-medium py-2 border-t border-gray-100 dark:border-gray-700">
            Browse Reference Library
          </a>
        </div>

        {/* NCERT Solutions */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full mr-3">
              <BookOpen className="text-orange-500" size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">NCERT Solutions</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
            Step-by-step solutions to textbook questions
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Class 12 Chemistry Solutions</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Download size={16} />
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Class 11 Physics Solutions</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Download size={16} />
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Class 10 Mathematics Solutions</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Download size={16} />
              </a>
            </div>
          </div>
          
          <a href="#" className="block text-center text-sm text-orange-500 hover:text-orange-600 font-medium py-2 border-t border-gray-100 dark:border-gray-700">
            View All Solutions
          </a>
        </div>

        {/* Study Planners */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full mr-3">
              <Calendar className="text-orange-500" size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Study Planners</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
            Organized schedules for effective learning
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Board Exam Preparation Plan</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Download size={16} />
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Monthly Study Calendar</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Download size={16} />
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Subject-wise Revision Guide</span>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <Download size={16} />
              </a>
            </div>
          </div>
          
          <a href="#" className="block text-center text-sm text-orange-500 hover:text-orange-600 font-medium py-2 border-t border-gray-100 dark:border-gray-700">
            Get All Study Planners
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resources;