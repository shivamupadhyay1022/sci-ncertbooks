import React from 'react';
import { BookOpen, Users, Award, Target, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          About <span className="text-orange-500">ChemistryForum</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Empowering students across India with accessible educational resources since 2022
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-10 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-6">
          <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full mr-4">
            <Target className="text-orange-500" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Our Mission</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          At ChemistryForum, we believe that quality education should be accessible to all. Our mission is to provide students 
          across India with free, easy access to NCERT books and supplementary educational resources to support their 
          academic journey.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          We're committed to breaking down barriers to education by creating a platform where students from all backgrounds
          can access high-quality learning materials, regardless of their geographic location or economic circumstances.
        </p>
      </div>

      {/* Who We Are Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-10 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-6">
          <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full mr-4">
            <Users className="text-orange-500" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Who We Are</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          Founded in 2022, ChemistryForum started as a small community of teachers and education enthusiasts passionate 
          about making chemistry education more engaging and accessible. Today, we've expanded our scope to cover all 
          NCERT materials across subjects, while maintaining our special focus on chemistry education.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
            <h3 className="font-bold text-gray-800 dark:text-white mb-3 flex items-center">
              <Award className="text-orange-500 mr-2" size={20} />
              Our Team
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Our diverse team includes experienced educators, subject matter experts, and technology professionals 
              committed to making education accessible to all.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
            <h3 className="font-bold text-gray-800 dark:text-white mb-3 flex items-center">
              <Clock className="text-orange-500 mr-2" size={20} />
              Our Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              What began as a small initiative has grown into a platform serving thousands of students daily, 
              with continuous improvements based on user feedback and educational needs.
            </p>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-10 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-6">
          <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full mr-4">
            <BookOpen className="text-orange-500" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">What We Offer</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex">
            <div className="bg-orange-100 dark:bg-orange-900/20 p-2 h-min rounded-full mr-3">
              <BookOpen className="text-orange-500" size={18} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Complete NCERT Textbooks</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Access the latest editions of all NCERT textbooks from Class 1 to 12, available in multiple languages.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-orange-100 dark:bg-orange-900/20 p-2 h-min rounded-full mr-3">
              <Award className="text-orange-500" size={18} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Supplementary Materials</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Enhance your learning with our curated study notes, practice questions, and solved examples.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-orange-100 dark:bg-orange-900/20 p-2 h-min rounded-full mr-3">
              <Target className="text-orange-500" size={18} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Interactive Resources</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Engage with interactive simulations, videos, and quizzes designed to make learning more effective.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="bg-orange-100 dark:bg-orange-900/20 p-2 h-min rounded-full mr-3">
              <MessageSquare className="text-orange-500" size={18} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Community Support</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Join our community forum where students can ask questions and get help from peers and educators.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-lg border border-orange-100 dark:border-orange-900/20">
          <p className="text-gray-700 dark:text-gray-200 text-sm">
            <strong>Coming Soon:</strong> Mobile app for offline access, personalized learning paths, and virtual study groups.
          </p>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-10 border border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Our Impact</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-orange-500 mb-2">50,000+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Daily Active Users</div>
          </div>
          
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-orange-500 mb-2">1,000+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Educational Resources</div>
          </div>
          
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-orange-500 mb-2">28</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">States Reached</div>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-center italic">
          "Our goal is to reach every student in India, regardless of their location or economic background."
        </p>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-md p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Educational Journey</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Whether you're a student looking for resources, a teacher wanting to contribute, or an organization interested in partnering with us, we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-white text-orange-500 hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-colors duration-300">
            Contact Us
          </Link>
          <Link to="/resources" className="bg-orange-600 hover:bg-orange-700 text-white border border-orange-400 font-medium py-2 px-6 rounded-md transition-colors duration-300">
            Explore Resources
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;