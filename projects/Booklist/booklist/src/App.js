import "./App.css";
import Books from "./components/Books";

function App() {
  const books = [
    {
      name: "Harlan Coben",
      img: "https://m.media-amazon.com/images/I/51j1t+6U+FL.jpg",
      title: "I Will Find You",
      id: 1
    },
    {
      name: "David Baldacci",
      img: "https://m.media-amazon.com/images/I/51TCK7JUxbL.jpg",
      title: "Simply Lies",
      id: 2
    },
    {
      name: "James Patterson",
      img: "https://m.media-amazon.com/images/I/6136ZnBUxjL.jpg",
      title: "The Trial: A BookShot: A Women's Murder Club Story",
      id: 3
    },
  ];
  return (
    <section className="booklist">
      {books.map((book) => {
        return (<Books {...book} key={book.id} />)
        
      })}

    </section>
  );
}

export default App;
