import React from "react";

const Filter = ({ title, options, handleChange }) => {
  return (
    <div className="filter">
      <select
        onChange={handleChange}
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
