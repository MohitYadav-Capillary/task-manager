import { Link } from "react-router-dom";
import "./tableRow.css";

const TableBodyRow = (props) => {
  return (
    <tr>
      <td>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to={`/task/${props.taskIdx}`}
        >
          {props.task}
        </Link>
      </td>
      <td>{props.desc}</td>
      <td>{props.owner}</td>
      <td>{props.lastUpdated}</td>
      <td>{props.priority}</td>
      <td>{props.status}</td>
      <td>
        <button onClick={() => props.deleteTask(props.taskIdx)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableBodyRow;
