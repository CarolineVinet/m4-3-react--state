import React from "react";
import data, { categories } from "../data";
import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  color: white;
  border-radius: 5px;
`;

const Typehead = ({ data, handleSelect }) => {
  const [text, setText] = React.useState("");
  return (
    <label>
      <input
        type="text"
        onChange={(event) => {
          setText(event.target.value);
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
      </Button>
    </label>
  );
};

export default Typehead;
