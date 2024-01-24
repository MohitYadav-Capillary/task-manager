import React from "react";
import "./table.css";
import TableRow from "./tableRow/tableRow";
import { useSelector } from "react-redux";

const Table = () => {
  const data = useSelector((state) => state.tasks);

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
