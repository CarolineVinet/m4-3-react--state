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
  padding: 10px;
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
  const findSuggestions = (text) => {
    if (text !== "") {
      let filteredBooksArray = books.filter((book) => {
        return book.title.toLowerCase().includes(text.toLowerCase());
      });

      let newArray = filteredBooksArray.map((book) => {
        return (
          <Suggestion key={book.id} onClick={() => handleSelect(book.title)}>
            {book.title}
          </Suggestion>
        );
      });

      console.log(newArray);
      setDisplaySuggestions(newArray);
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
          findSuggestions(event.target.value);
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
      {displaySuggestions.length > 0 && text.length > 1 && (
        <SuggestionList>{displaySuggestions}</SuggestionList>
      )}
    </label>
  );
};

export default Typehead;
