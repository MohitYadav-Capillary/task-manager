import React from "react";
import "./table.css";
import TableRow from "./tableRow/tableRow";
import { useSelector } from "react-redux";

const Table = ({ status, priority, associated }) => {
  let data = useSelector((state) => state.tasks);

  if (status !== "Status") {
    data = data.filter((task) => task.status === status);
  }
  if (priority !== "Priority") {
    data = data.filter((task) => task.priority === priority);
  }
  if (associated !== "Associated") {
    data = data.filter((task) => task.owner === associated);
  }
  return (
    <div className="table">
      <table>
        <thead className="thead">
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Associated</th>

            <th>Last updated</th>
            <th>Priority</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((task, index) => {
            return (
              <TableRow
                key={index}
                taskIdx={index}
                task={task.task}
                desc={task.desc}
                owner={task.owner}
                priority={task.priority}
                lastUpdated={task.lastUpdated}
                status={task.status}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
