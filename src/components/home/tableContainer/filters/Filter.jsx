import React from "react";
import "./filter.css";

const Filter = ({ title, options }) => {
  return (
    <div className="filter">
      {/* <h4>{title}</h4>
      <svg
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
      </svg> */}
      <select
        style={{
          color: "black",
          height: "40px",
          width: "170px",
          padding: "5px",
        }}
        name="status"
        id="status"
      >
        <option value={title}>{title}</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
