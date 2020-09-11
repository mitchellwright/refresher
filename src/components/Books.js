import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Books = () => {
  let { id } = useParams();
  const [book, setBook] = useState({
    series: "",
    title: "",
    author: "",
  });

  useEffect(() => {
    axios
      .get(`https://reststop.randomhouse.com/resources/works/${id}`)
      .then((res) => {
        console.log(res.data);
        setBook({
          series: res.data.series,
          title: res.data.titleweb,
          author: res.data.authorweb,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Books Component</h2>
      <p>{id}</p>
      <p>Series: {book.series}</p>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
    </div>
  );
};

export default Books;
