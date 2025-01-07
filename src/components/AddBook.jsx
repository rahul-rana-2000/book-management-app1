/*import React, { useContext } from 'react';
import BookForm from './BookForm';
import BooksContext from '../context/BooksContext';

const AddBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;*/

import React, { useContext } from 'react';
import BookForm from './BookForm';
import BooksContext from '../context/BooksContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AddBook = () => {
  const { books, setBooks } = useContext(BooksContext);
  const navigate = useNavigate(); // Get the navigate function

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]); // Add the new book to the state
    navigate('/'); // Navigate to the home page (or another route)
  };

  return (
    <React.Fragment>
    
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
