import { taskData } from "../assets/data";

const initialState = {
  tasks: taskData,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task, idx) => idx !== action.payload),
      };
    case "UPDATE_TASK":
      const newTasks = [...state.tasks];

      newTasks[action.payload.id] = action.payload.task;
      return {
        tasks: newTasks,
      };
    default:
      return state;
  }
};

export default taskReducer;
