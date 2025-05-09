import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import './App.css';
import Footer from './components/Footer';
import About from './pages/About';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BookDetail from './pages/BookDetail';
import Books from './pages/Books';
import ReadBook from './pages/ReadBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/read/:id" element={<ReadBook/>} />
        <Route path="*" element={
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About/>} />
                <Route path="/resources" element={<Resources/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/books/:id" element={<BookDetail/>} />
                <Route path="/books" element={<Books/>} />
                <Route path="/topics" element={<div className="text-gray-800 dark:text-white">Topics Search</div>} />
              </Routes>
            </div>
            <Footer/>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;


