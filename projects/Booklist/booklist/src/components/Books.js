import React from "react";

const Books = (props) => {
  const {name, img, title} = props
  return (
    <article className="book">
      <img src={img} alt="none" />
      <h1>{name}</h1>
      <h3>{title}</h3>
    </article>
  );
};

export default Books;
  