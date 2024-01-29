import React, { useState } from "react";
import "./tableContainer.css";
import Table from "./table/Table";
import Filter from "./filters/Filter";
import { Link } from "react-router-dom";

const TableContainer = ({ tasks }) => {
  const owners = tasks.map((task) => task.owner);

  const unique_owners = owners.filter(
    (owner, index) => owners.indexOf(owner) === index
  );

  const [status, setStatus] = useState("Status");
  const [priority, setPriority] = useState("Priority");
  const [associated, setAssociated] = useState("Associated");
  const handleChange = (e) => {
    if (e.target.name === "status") {
      setStatus(e.target.value);
    } else if (e.target.name === "priority") {
      setPriority(e.target.value);
    } else if (e.target.name === "associated") {
      setAssociated(e.target.value);
    }
  };

  return (
    <div className="table__container">
      <div className="filters__panel">
        <div className="filters">
          <Filter
            name="status"
            title="Status"
            options={["Pending", "Completed"]}
            handleChange={handleChange}
          />
          <Filter
            title="Priority"
            name="priority"
            options={["Low", "Medium", "High"]}
            handleChange={handleChange}
          />
          <Filter
            title="Associated"
            name="associated"
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
      <Table
        tasks={tasks}
        status={status}
        priority={priority}
        associated={associated}
      />
    </div>
  );
};

export default TableContainer;
