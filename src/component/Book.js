import React from 'react';

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props.book;
  return (
    <artical className="books">
      <img src={img} className="img" />
      <h3>{title}</h3>
      <p>{author}</p>
    </artical>
  );
};

export default Book