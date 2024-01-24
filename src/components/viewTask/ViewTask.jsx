import React, { useContext } from "react";
import "./viewTask.css";
import Input from "./input/Input";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTask } from "../actions";

const ViewTask = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      task: e.target[0].value,
      desc: e.target[1].value,
      owner: e.target[2].value,
      priority: e.target[4].value,
      status: e.target[3].value,
      lastUpdated: `${new Date().toLocaleString()}`,
    };

    dispatch(updateTask(taskId, task));

    navigate(-1);
  };

  return (
    <>
      <div className="heading">
        <h1>Task Details</h1>
      </div>

      <form onSubmit={submitHandler} className="create">
        <Input name="Task" value={tasks[taskId].task} />
        <Input name="Description" value={tasks[taskId].desc} />
        <Input name="Owner" value={tasks[taskId].owner} />

        <label htmlFor="priority">Status</label>
        <select name="status" id="status" defaultValue={tasks[taskId].status}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <br />
        <br />
        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          id="priority"
          defaultValue={tasks[taskId].priority}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Update Task</button>
      </form>
    </>
  );
};

export default ViewTask;
