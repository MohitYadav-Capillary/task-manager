import { Link } from "react-router-dom";
import "./tableRow.css";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../../actions";

const TableRow = (props) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to={`/task/${props.taskId}`}
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
        <button onClick={() => dispatch(deleteTask(props.taskId))}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
