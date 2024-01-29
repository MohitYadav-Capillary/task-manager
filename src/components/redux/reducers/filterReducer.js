import { UPDATE_STATUS, UPDATE_PRIORITY, UPDATE_OWNER } from "../actions";

const initialState = {
  filters: {
    status: "Status",
    priority: "Priority",
    owner: "Associated",
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STATUS:
      return {
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };

    case UPDATE_PRIORITY:
      return {
        filters: {
          ...state.filters,
          priority: action.payload,
        },
      };

    case UPDATE_OWNER:
      return {
        filters: {
          ...state.filters,
          owner: action.payload,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
