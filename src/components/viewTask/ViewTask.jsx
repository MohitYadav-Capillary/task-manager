import React from "react";
import "./viewTask.css";
import Input from "./input/Input";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTaskRequest } from "../redux/actions";

const ViewTask = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    const updatedTask = {
      id: taskId,
      task: e.target[0].value,
      desc: e.target[1].value,
      owner: e.target[2].value,
      priority: e.target[4].value,
      status: e.target[3].value,
      lastUpdated: `${new Date().toLocaleString()}`,
    };

    dispatch(updateTaskRequest(updatedTask));

    navigate(-1);
  };

  const currTask = tasks.find((task) => task.id == taskId);

  return (
    <>
      <div className="heading">
        <h1>Task Details</h1>
      </div>

      <form onSubmit={submitHandler} className="create">
        <Input name="Task" value={currTask?.task} />
        <Input name="Description" value={currTask?.desc} />
        <Input name="Owner" value={currTask?.owner} />

        <label htmlFor="priority">Status</label>
        <select name="status" id="status" defaultValue={currTask?.status}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <br />
        <br />
        <label htmlFor="priority">Priority</label>
        <select name="priority" id="priority" defaultValue={currTask?.priority}>
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
