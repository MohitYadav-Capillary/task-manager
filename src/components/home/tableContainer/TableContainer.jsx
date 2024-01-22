import React, { useContext } from "react";
import "./tableContainer.css";
import Table from "./table/Table";
import Filter from "./filters/Filter";
import { Link } from "react-router-dom";
import { taskDataContext } from "../../../App";

const TableContainer = () => {
  const data = useContext(taskDataContext);
  const owners = data.map((task) => task.owner);
  const unique_owners = owners.filter(
    (owner, index) => owners.indexOf(owner) === index
  );
  return (
    <div className="table__container">
      <div className="filters__panel">
        <div className="filters">
          <Filter title="Status" options={["Pending", "Completed"]} />
          <Filter title="Priority" options={["Low", "Medium", "High"]} />
          <Filter title="Associated" options={unique_owners} />
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
