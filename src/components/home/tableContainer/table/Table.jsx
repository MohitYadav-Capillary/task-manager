import React from "react";
import "./table.css";
import TableRow from "./tableRow/tableRow";

const Table = ({ tasks, status, priority, associated }) => {
  let filteredTasks = tasks;
  if (status !== "Status") {
    filteredTasks = tasks.filter((task) => task.status === status);
  }
  if (priority !== "Priority") {
    filteredTasks = filteredTasks.filter((task) => task.priority === priority);
  }
  if (associated !== "Associated") {
    filteredTasks = filteredTasks.filter((task) => task.owner === associated);
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
          {filteredTasks.map((task, index) => {
            return (
              <TableRow
                key={index}
                taskId={task.id}
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
