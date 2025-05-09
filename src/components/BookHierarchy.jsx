import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get, child } from 'firebase/database';
import { BookOpen, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function BookHierarchy() {
  const [hierarchy, setHierarchy] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedItems, setExpandedItems] = useState({
    classes: {},
    subjects: {},
    books: {}
  });

  useEffect(() => {
    const fetchHierarchy = async () => {
      try {
        setLoading(true);
        const database = getDatabase();
        const dbRef = ref(database);
        
        const snapshot = await get(child(dbRef, 'books/ncert'));
        
        if (snapshot.exists()) {
          setHierarchy(snapshot.val());
        } else {
          console.log("No hierarchy data available");
        }
      } catch (err) {
        console.error("Error fetching hierarchy:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHierarchy();
  }, []);

  const toggleClass = (classKey) => {
    setExpandedItems(prev => ({
      ...prev,
      classes: {
        ...prev.classes,
        [classKey]: !prev.classes[classKey]
      }
    }));
  };

  const toggleSubject = (classKey, subjectKey) => {
    const key = `${classKey}-${subjectKey}`;
    setExpandedItems(prev => ({
      ...prev,
      subjects: {
        ...prev.subjects,
        [key]: !prev.subjects[key]
      }
    }));
  };

  const toggleBook = (classKey, subjectKey, bookKey) => {
    const key = `${classKey}-${subjectKey}-${bookKey}`;
    setExpandedItems(prev => ({
      ...prev,
      books: {
        ...prev.books,
        [key]: !prev.books[key]
      }
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">NCERT Books Hierarchy</h2>
      
      <div className="space-y-4">
        {Object.keys(hierarchy).map(classKey => (
          <div key={classKey} className="border-b border-gray-100 dark:border-gray-700 pb-2">
            <div 
              className="flex items-center cursor-pointer py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded px-2"
              onClick={() => toggleClass(classKey)}
            >
              {expandedItems.classes[classKey] ? (
                <ChevronDown className="text-orange-500 mr-2" size={20} />
              ) : (
                <ChevronRight className="text-orange-500 mr-2" size={20} />
              )}
              <span className="font-medium text-gray-800 dark:text-white capitalize">
                {classKey.replace('class', 'Class ')}
              </span>
            </div>
            
            {expandedItems.classes[classKey] && (
              <div className="ml-6 mt-2 space-y-3">
                {Object.keys(hierarchy[classKey]).map(subjectKey => (
                  <div key={subjectKey} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                    <div 
                      className="flex items-center cursor-pointer py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded px-2"
                      onClick={() => toggleSubject(classKey, subjectKey)}
                    >
                      {expandedItems.subjects[`${classKey}-${subjectKey}`] ? (
                        <ChevronDown className="text-orange-500 mr-2" size={18} />
                      ) : (
                        <ChevronRight className="text-orange-500 mr-2" size={18} />
                      )}
                      <span className="text-gray-700 dark:text-gray-300 capitalize">
                        {subjectKey}
                      </span>
                    </div>
                    
                    {expandedItems.subjects[`${classKey}-${subjectKey}`] && (
                      <div className="ml-6 mt-1 space-y-2">
                        {Object.keys(hierarchy[classKey][subjectKey]).map(bookKey => (
                          <div key={bookKey} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                            <div 
                              className="flex items-center cursor-pointer py-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded px-2"
                              onClick={() => toggleBook(classKey, subjectKey, bookKey)}
                            >
                              <BookOpen className="text-orange-500 mr-2" size={16} />
                              <span className="text-gray-600 dark:text-gray-400">
                                {hierarchy[classKey][subjectKey][bookKey].title}
                              </span>
                            </div>
                            
                            {expandedItems.books[`${classKey}-${subjectKey}-${bookKey}`] && (
                              <div className="ml-6 mt-1 space-y-1">
                                {hierarchy[classKey][subjectKey][bookKey].chapters && 
                                  Object.keys(hierarchy[classKey][subjectKey][bookKey].chapters).map(chapterKey => (
                                    <div key={chapterKey} className="flex items-center py-1">
                                      <Link 
                                        to={`/read/${bookKey}`} 
                                        className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                                      >
                                        <span className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mr-2"></span>
                                        {hierarchy[classKey][subjectKey][bookKey].chapters[chapterKey].title}
                                      </Link>
                                    </div>
                                  ))
                                }
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookHierarchy;
