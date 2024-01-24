import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./constants";

const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

const updateTask = (updatedTask) => {
  return {
    type: UPDATE_TASK,
    payload: { task: updatedTask },
  };
};

export { addTask, deleteTask, updateTask };
