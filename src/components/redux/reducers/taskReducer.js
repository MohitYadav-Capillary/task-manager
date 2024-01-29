import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
} from "../constants";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_TASKS_SUCCESS:
      return {
        tasks: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_TASKS_FAILURE:
      return {
        tasks: [],
        loading: false,
        error: action.payload,
      };

    case DELETE_TASK_REQUEST:
      return { ...state, loading: true, error: null };

    case DELETE_TASK_SUCCESS:
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),

        loading: false,
        error: null,
      };

    case DELETE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_TASK_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_TASK_SUCCESS:
      return {
        tasks: [...state.tasks, action.payload],
        loading: false,
        error: null,
      };
    case ADD_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_TASK_REQUEST:
      return { ...state, loading: true, error: null };

    case UPDATE_TASK_SUCCESS:
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
        loading: false,
        error: null,
      };

    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default taskReducer;
