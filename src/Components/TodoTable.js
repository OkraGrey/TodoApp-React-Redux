import Task from "./Task";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CompleteAllAction,
  DeleteAllCompletedAction,
} from "../redux/features/todos";
import { useDispatch } from "react-redux";
import { useState } from "react";

//Component
const TodoTable = ({
  todos,
  updateFormVisibility,
  setUpdateFormVisibility,
  editForm,
  setEditForm,
}) => {
  //State Variables
  const [tasks, setTasks] = useState([...todos]);
  const [all, setAll] = useState(true);
  const [incomplete, setIncomplete] = useState(false);
  const [complete, setComplete] = useState(false);
  const dataArray = [];
  const dispatch = useDispatch();
  //Button handlers => Filters
  const handleInCompleteFilter = () => {
    setComplete(false);
    setAll(false);
    setIncomplete(true);
  };

  const handleCompleteFilter = () => {
    setAll(false);
    setIncomplete(false);
    setComplete(true);
  };

  const handleAllFilter = () => {
    setIncomplete(false);
    setComplete(false);
    setAll(true);
  };

  //Actions for accessing State in Redux Store
  const handleDelete = () => {
    dispatch(DeleteAllCompletedAction());
  };

  const handleCompleteAll = () => {
    dispatch(CompleteAllAction());
  };

  //Returning the main component
  if (!updateFormVisibility) {
    return (
      <div className="table">
        <h1>YOUR TODOS</h1>

        <div className="filters">
          <button className="filter" onClick={handleCompleteAll}>
            Complete All
          </button>
          <button className="filter" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
            Completed
          </button>
        </div>

        {all &&
          todos.map((todo) => {
            return (
              <Task
                task={todo}
                key={todo.id}
                editForm={editForm}
                setEditForm={setEditForm}
                updateFormVisibility={updateFormVisibility}
                setUpdateFormVisibility={setUpdateFormVisibility}
              />
            );
          })}
        {incomplete &&
          todos
            .filter((task) => task.is_completed === false)
            .map((todo) => {
              return (
                <Task
                  key={todo.id}
                  task={todo}
                  updateFormVisibility={updateFormVisibility}
                  setUpdateFormVisibility={setUpdateFormVisibility}
                />
              );
            })}
        {complete &&
          todos
            .filter((task) => task.is_completed === true)
            .map((todo) => {
              return (
                <Task
                  key={todo.id}
                  task={todo}
                  updateFormVisibility={updateFormVisibility}
                  setUpdateFormVisibility={setUpdateFormVisibility}
                />
              );
            })}

        <div className="filters">
          <button className="filter" onClick={handleCompleteFilter}>
            By Complete
          </button>
          <button className="filter" onClick={handleInCompleteFilter}>
            By InComplete
          </button>
          <button className="filter" onClick={handleAllFilter}>
            All
          </button>
        </div>
      </div>
    );
  }
};
export default TodoTable;
