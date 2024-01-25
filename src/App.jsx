import { Provider, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import CreateTask from "./components/createTask/CreateTask";
import ViewTask from "./components/viewTask/ViewTask";
import store from "./components/redux/store/store";

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/create" element={<CreateTask />} />
          <Route path="/task/:taskId" element={<ViewTask />} />
        </Routes>
      </Provider>
    </div>
  );
};
export default App;
