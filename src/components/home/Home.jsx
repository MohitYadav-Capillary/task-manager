import React, { useEffect } from "react";
import "./home.css";
import TableContainer from "./tableContainer/TableContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksRequest } from "../redux/actions";
import ReactLoading from "react-loading";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, []);

  const loading = useSelector((state) => state.loading);

  return (
    <>
      <div className="header">
        <h1>Tasks</h1>
        <p>
          Delight your customers with rewards based on their progress, and
          achievements
        </p>
      </div>
      {loading ? (
        <ReactLoading
          className="loader"
          type={"spinningBubbles"}
          color={"#89db8f"}
        />
      ) : (
        <TableContainer />
      )}
    </>
  );
};

export default Home;
