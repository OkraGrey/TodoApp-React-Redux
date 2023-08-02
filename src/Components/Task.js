import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteByIdAction,
  EditCompleteStateAction,
} from "../redux/features/todos";

//Task Component
const Task = ({
  task,
  updateFormVisibility,
  setUpdateFormVisibility,
  setEditForm,
  editForm,
}) => {
  //state level variables
  const dispatch = useDispatch();

  const handleEditById = (task) => {
    // dispatch(EditByIdAction(task));
    setEditForm(task);
    setUpdateFormVisibility(true);
  };
  //handlers
  const handleDeleteById = (id) => {
    dispatch(DeleteByIdAction(id));
  };

  const handleCheckBox = (id) => {
    dispatch(EditCompleteStateAction(id));
  };

  //Actual Component
  return (
    <div className="task" key={task.id}>
      <p
        style={
          task.is_completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        <input
          type="checkbox"
          checked={task.is_completed}
          onChange={() => handleCheckBox(task.id)}
        />
        {task.task}
      </p>
      <div className="btn-container">
        <button
          className="btn"
          id="btn-del"
          onClick={() => handleDeleteById(task.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button
          className="btn"
          id="btn-edit"
          onClick={() => handleEditById(task)}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </div>
    </div>
  );
};
export default Task;
