

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Updated imports
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';
import BooksContext from '../context/BooksContext';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
    <BrowserRouter basename='/book-management-app'>
      <div>
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{ books, setBooks }}>
            <Routes> {/* Use Routes instead of Switch */}
              <Route path="/" element={<BooksList />} />  {/* Updated Route syntax */}
              <Route path="/add" element={<AddBook />} />
              <Route path="/edit/:id" element={<EditBook />} />
              <Route path="*" element={<Navigate to="/" />} />  {/* Updated Redirect */}
            </Routes>
          </BooksContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
