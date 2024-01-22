import React, { useContext, useState } from "react";
import "./table.css";
import TableRow from "./tableRow/tableRow";
import { taskDataContext } from "../../../../App";

const Table = () => {
  const [data, setData] = useState(useContext(taskDataContext));

  const deleteTask = (key) => {
    // console.log('deleting task task');
    const newData = data.filter((task, index) => index !== key);
    // console.log(newData);
    setData(newData);
  };

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
                deleteTask={deleteTask}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
