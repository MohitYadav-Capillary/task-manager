import React, { useEffect } from "react";
import TableContainer from "./tableContainer/TableContainer";
import { useDispatch } from "react-redux";
import { fetchTasksRequest } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, []);

  return (
    <>
      <div className="header">
        <h1>Tasks</h1>
        <p>
          Delight your customers with rewards based on their progress, and
          achievements
        </p>
      </div>
      <TableContainer />
    </>
  );
};

export default Home;
