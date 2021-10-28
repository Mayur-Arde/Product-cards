import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import Data from './Data';
import Book from './component/Book'

const Booklist = function () {
  return (
    <section className="book-list">
      {Data.map((book) => {
        return <Book key={Data.id} book={book}></Book>;
      })}
    </section>
  );
};

export default Booklist;
