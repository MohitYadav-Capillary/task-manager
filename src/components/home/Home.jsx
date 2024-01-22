import React from "react";
import TableContainer from "./tableContainer/TableContainer";

const Home = () => {
  // console.log('Home rendered');
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
