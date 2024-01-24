import { legacy_createStore as createStore } from "redux";
import taskReducer from "../components/taskReducer";

const store = createStore(taskReducer);

export default store;
