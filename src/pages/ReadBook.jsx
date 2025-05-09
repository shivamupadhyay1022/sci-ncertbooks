import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import '../styles/PdfReader.css';
import { getDatabase, ref, get, child } from 'firebase/database';

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function ReadBook() {
  const { id } = useParams();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  // Fetch book data from Firebase
  useEffect(() => {
    const fetchBookData = async () => {
      try {
        setLoading(true);
        const database = getDatabase();
        const dbRef = ref(database);

        // Search for the book in all classes and subjects
        const snapshot = await get(child(dbRef, 'books/ncert'));

        if (snapshot.exists()) {
          const data = snapshot.val();
          let foundBook = null;
          let foundBookPath = null;

          // Search through the hierarchy to find the book by ID
          Object.keys(data).forEach(classKey => {
            Object.keys(data[classKey]).forEach(subjectKey => {
              Object.keys(data[classKey][subjectKey]).forEach(bookKey => {
                if (bookKey === id || bookKey.replace(/\s+/g, '') === id) {
                  foundBook = data[classKey][subjectKey][bookKey];
                  foundBookPath = `${classKey}/${subjectKey}/${bookKey}`;
                }
              });
            });
          });

          if (foundBook) {
            setBookData(foundBook);

            // Set the first chapter as the default if available
            if (foundBook.chapters && Object.keys(foundBook.chapters).length > 0) {
              const firstChapterKey = Object.keys(foundBook.chapters)[0];
              setSelectedChapter(firstChapterKey);
              setPdfUrl(foundBook.chapters[firstChapterKey].pdfLink);
            }
          } else {
            setError("Book not found");
          }
        } else {
          setError("No books data available");
        }
      } catch (err) {
        console.error("Error fetching book data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookData();
  }, [id]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset;
      return Math.max(1, Math.min(numPages, newPageNumber));
    });
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function zoomIn() {
    setScale(prevScale => Math.min(prevScale + 0.2, 2.5));
  }

  function zoomOut() {
    setScale(prevScale => Math.max(prevScale - 0.2, 0.5));
  }

  // Function to handle chapter selection
  const handleChapterSelect = (chapterKey) => {
    if (bookData && bookData.chapters && bookData.chapters[chapterKey]) {
      setSelectedChapter(chapterKey);
      setPdfUrl(bookData.chapters[chapterKey].pdfLink);
      setPageNumber(1); // Reset to first page when changing chapters
    }
  };

  // Function to download the current PDF
  const handleDownload = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">Loading book data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 justify-center items-center">
        <div className="bg-red-100 dark:bg-red-900/20 p-6 rounded-lg max-w-md text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <Link
            to="/books"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Books
          </Link>
        </div>
      </div>
    );
  }

  if (!bookData) {
    return (
      <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 justify-center items-center">
        <div className="bg-yellow-100 dark:bg-yellow-900/20 p-6 rounded-lg max-w-md text-center">
          <p className="text-yellow-600 dark:text-yellow-400 mb-4">Book not found</p>
          <Link
            to="/books"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header with navigation and controls */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to={`/books/${id}`} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center">
              <ArrowLeft size={20} className="mr-1" />
              <span>Back to Book Details</span>
            </Link>
            <h1 className="text-lg font-medium text-gray-800 dark:text-white hidden md:block">
              {bookData.title}
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={zoomOut}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              aria-label="Zoom out"
            >
              <ZoomOut size={20} />
            </button>
            <span className="text-gray-600 dark:text-gray-300">{Math.round(scale * 100)}%</span>
            <button
              onClick={zoomIn}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
              aria-label="Zoom in"
            >
              <ZoomIn size={20} />
            </button>
            <button
              onClick={handleDownload}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-1.5 px-4 rounded-md transition-colors duration-300 flex items-center gap-1"
              aria-label="Download PDF"
            >
              <Download size={16} />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content area with chapters sidebar and PDF viewer */}
      <div className="flex-grow overflow-hidden flex">
        {/* Chapters sidebar */}
        <div className="w-64 bg-white dark:bg-gray-800 shadow-md overflow-y-auto hidden md:block">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="font-bold text-gray-800 dark:text-white">Chapters</h2>
          </div>
          <div className="p-2">
            {bookData.chapters && Object.keys(bookData.chapters).map((chapterKey) => (
              <button
                key={chapterKey}
                onClick={() => handleChapterSelect(chapterKey)}
                className={`w-full text-left p-2 rounded-md mb-1 flex items-start ${
                  selectedChapter === chapterKey
                    ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                <BookOpen size={16} className={`mr-2 mt-0.5 ${selectedChapter === chapterKey ? 'text-orange-500' : 'text-gray-500 dark:text-gray-400'}`} />
                <span className="text-sm">{bookData.chapters[chapterKey].title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* PDF viewer */}
        <div className="flex-grow overflow-auto">
          {pdfUrl ? (
            <div className="p-6">
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="flex justify-center items-center h-96">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
                  </div>
                }
                error={
                  <div className="flex justify-center items-center h-96 text-red-500">
                    Failed to load PDF. Please try again later.
                  </div>
                }
                className="mx-auto"
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  className="page"
                />
              </Document>
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <div className="text-gray-500 dark:text-gray-400">
                Select a chapter to start reading
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer with page navigation */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-t border-gray-200 dark:border-gray-700 py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Mobile chapter selector */}
          <div className="md:hidden">
            <select
              value={selectedChapter || ''}
              onChange={(e) => handleChapterSelect(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-sm p-2"
            >
              <option value="" disabled>Select Chapter</option>
              {bookData.chapters && Object.keys(bookData.chapters).map((chapterKey) => (
                <option key={chapterKey} value={chapterKey}>
                  {bookData.chapters[chapterKey].title}
                </option>
              ))}
            </select>
          </div>

          {/* Page navigation */}
          <div className="flex items-center space-x-4">
            <button
              onClick={previousPage}
              disabled={pageNumber <= 1}
              className={`p-2 rounded-full ${pageNumber <= 1 ? 'text-gray-400 dark:text-gray-600' : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'}`}
              aria-label="Previous page"
            >
              <ChevronLeft size={24} />
            </button>
            <span className="text-gray-600 dark:text-gray-300">
              Page {pageNumber} of {numPages || '--'}
            </span>
            <button
              onClick={nextPage}
              disabled={pageNumber >= numPages}
              className={`p-2 rounded-full ${pageNumber >= numPages ? 'text-gray-400 dark:text-gray-600' : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'}`}
              aria-label="Next page"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Empty div for layout balance on mobile */}
          <div className="md:hidden w-10"></div>
        </div>
      </div>
    </div>
  );
}

export default ReadBook;
