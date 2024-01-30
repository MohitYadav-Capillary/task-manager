import React from "react";
import "./createTask.css";
import Input from "./input/Input";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addTaskRequest } from "../redux/actionCreators";
import { nanoid } from "nanoid";

const CreateTask = ({ addTask }) => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      id: nanoid(),
      task: e.target[0].value,
      desc: e.target[1].value,
      owner: e.target[2].value,
      priority: e.target[3].value,
      status: "Pending",
      lastUpdated: `${new Date().toLocaleString()}`,
    };

    addTask(task);

    navigate(-1);
  };

  return (
    <form onSubmit={submitHandler} className="create">
      <Input name="Task" />
      <Input name="Description" />
      <Input name="Owner" />
      <label htmlFor="priority">Priority</label>
      <select name="priority" id="priority" defaultValue="High">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Create</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTaskRequest(task)),
  };
};

export default connect(null, mapDispatchToProps)(CreateTask);
