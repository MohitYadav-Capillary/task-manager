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

const updateTask = (taskId, task) => {
  return {
    type: UPDATE_TASK,
    payload: { id: taskId, task: task },
  };
};

export { addTask, deleteTask, updateTask };
