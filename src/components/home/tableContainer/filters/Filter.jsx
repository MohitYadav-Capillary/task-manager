import React from "react";
const Filter = ({ title, options, handleChange }) => {
  return (
    <div className="filter" style={{ marginRight: "10px" }}>
      <select
        onChange={handleChange}
        style={{
          color: "black",
          height: "30px",
          width: "160px",
          padding: "5px",
          margin: "0px",
          fontSize: "14px",
          fontWeight: "bold",
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
