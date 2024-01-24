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
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "UPDATE_TASK":
      return {
        tasks: state.tasks.map((task) =>
          task.id == action.payload.task.id ? action.payload.task : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
