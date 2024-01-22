import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import CreateTask from "./components/createTask/CreateTask";
import ViewTask from "./components/viewTask/ViewTask";
import { taskData } from "./assets/data";

export const taskDataContext = createContext();
const App = () => {
  // console.log("Rendering App");

  // useEffect(() => {
  //   if (localStorage.getItem("taskData")) {
  //     setData(JSON.parse(localStorage.getItem("taskData")));
  //   } else {
  //     localStorage.setItem("taskData", JSON.stringify(data));
  //   }
  // }, [data]);
  let [data, setData] = useState(taskData);

  return (
    <div className="app">
      <taskDataContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/create" element={<CreateTask setData={setData} />} />
          <Route path="/task/:taskId" element={<ViewTask />} />
        </Routes>
      </taskDataContext.Provider>
    </div>
  );
};
export default App;
