import React from "react";
import "./tableContainer.css";
import Table from "./table/Table";
import Filter from "./filters/Filter";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TableContainer = () => {
  const data = useSelector((state) => state.tasks);
  const owners = data.map((task) => task.owner);
  const unique_owners = owners.filter(
    (owner, index) => owners.indexOf(owner) === index
  );

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="table__container">
      <div className="filters__panel">
        <div className="filters">
          <Filter
            title="Status"
            options={["Pending", "Completed"]}
            handleChange={handleChange}
          />
          <Filter
            title="Priority"
            options={["Low", "Medium", "High"]}
            handleChange={handleChange}
          />
          <Filter
            title="Associated"
            options={unique_owners}
            handleChange={handleChange}
          />
        </div>
        <div className="button">
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
            to="/create"
          >
            Create Task
          </Link>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default TableContainer;
