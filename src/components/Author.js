import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Author = (props) => {
  const [books, setBooks] = useState("Wheel of Time");
  const [authorName, setAuthorName] = useState("");
  const [spotlight, setSpotlight] = useState("");
  const [works, setWorks] = useState([]);

  useEffect(() => {
    axios
      .get("https://reststop.randomhouse.com/resources/authors/61085")
      .then((res) => {
        console.log(res.data.works.works);
        setAuthorName(res.data.authordisplay);
        setSpotlight(res.data.spotlight);
        setWorks(res.data.works.works);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    setBooks("Conan the Barbarian");
  };

  if (!authorName) {
    return "Loading...";
  }

  return (
    <div>
      <p>Author Component</p>
      <p>Name: {authorName}</p>
      <p>Spotlight: {spotlight}</p>
      <p>
        Books:
        <ul>
          {works.map((work) => {
            return (
              <li>
                <Link to={`/books/${work}`}>{work}</Link>
              </li>
            );
          })}
        </ul>
      </p>
      <button onClick={handleClick}>Change Books</button>
    </div>
  );
};

export default Author;
