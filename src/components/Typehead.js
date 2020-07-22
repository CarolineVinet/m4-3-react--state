import React from "react";
import data, { categories } from "../data";
import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  color: white;
  border-radius: 5px;
`;

const Suggestion = styled.li`
  padding: 10px;
  margin: 10px;
  padding-top: 15px;
  line-height: 1;
  font-size: 16px;
  align-content: center;
  background-color: white;
  &:hover {
    background-color: #f1f1bc;
  }
`;

const SuggestionList = styled.ul`
  position: absolute;
  width: 450px;
  box-shadow: 2px 2px 5px grey;
`;

const InputField = styled.div`
  position: absolute;
`;

const Typehead = ({ data, handleSelect }) => {
  const [text, setText] = React.useState("");
  const [displaySuggestions, setDisplaySuggestions] = React.useState([]);
  const books = data;
  const setUp = (text) => {
    if (text !== "") {
      let textQuery = books.map((book) => {
        console.log("Text entered: ", text);

        if (book.title.toLowerCase().includes(text.toLowerCase())) {
          console.log("Text entered found in: ", book.title);
          return (
            <Suggestion key={book.id} onClick={() => handleSelect(book.title)}>
              {book.title}
            </Suggestion>
          );
        }
      });

      setDisplaySuggestions(textQuery);
    } else {
      setDisplaySuggestions([]);
    }
  };

  return (
    <label>
      <input
        type="text"
        onChange={(event) => {
          setText(event.target.value);
          setUp(event.target.value);
        }}
        style={{ fontSize: 14 }}
        onKeyDown={(event) => {
          console.log(event.key);
          if (event.key === "Enter") {
            handleSelect(text);
          }
        }}
        value={text}
      ></input>
      <Button
        onClick={() => {
          setText("");
        }}
      >
        Clear
      </Button>{" "}
      <SuggestionList>{displaySuggestions}</SuggestionList>
    </label>
  );
};

export default Typehead;

//absolute on ul and input
