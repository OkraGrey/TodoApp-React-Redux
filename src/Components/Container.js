import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoTable from "./TodoTable";
import "./styles.css";
const Container = ({ todos }) => {
  // const todos = useSelector((state) => state.todo);
  // console.log(todos);
  const [updateFormVisibility, setUpdateFormVisibility] = useState(false);
  const [editForm, setEditForm] = useState({});
  const handleBackToTodo = () => {
    setEditForm({ id: -1, task: "", is_completed: false });
    setUpdateFormVisibility(false);
  };
  return (
    <div className="container">
      <h1 className="main-heading">Todo Application Updated</h1>
      <AddTodo
        todos={todos}
        editForm={editForm}
        setEditForm={setEditForm}
        updateFormVisibility={updateFormVisibility}
        setUpdateFormVisibility={setUpdateFormVisibility}
      />
      <TodoTable
        todos={todos}
        editForm={editForm}
        setEditForm={setEditForm}
        updateFormVisibility={updateFormVisibility}
        setUpdateFormVisibility={setUpdateFormVisibility}
      />
      {updateFormVisibility && (
        <button className="goBackToDos" onClick={handleBackToTodo}>
          Go Back ToDos
        </button>
      )}
    </div>
  );
};
export default Container;
