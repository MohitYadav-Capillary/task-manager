import React, { useState } from "react";
import "./input.css";

const Input = ({ name }) => {
  const [content, setContent] = useState("");

  return (
    <div className="input__container">
      <label htmlFor={name}>{name}</label>
      <input
        type="text"
        id={name}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
    </div>
  );
};

export default Input;
