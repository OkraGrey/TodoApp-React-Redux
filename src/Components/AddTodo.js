import { useState, useEffect } from "react";
import { AddTodoAction, EditByIdAction } from "../redux/features/todos";
import { useDispatch, useSelector } from "react-redux";

const AddTodo = ({
  todos,
  updateFormVisibility,
  setUpdateFormVisibility,
  editForm,
  setEditForm,
}) => {
  //state level variable`
  const dispatch = useDispatch();
  // const fieldValue = useSelector((store) => store.todo.inputValue);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(editForm.task);
  }, [editForm]);

  //handlers
  const handleAddTodo = (e) => {
    try {
      if (inputValue.length > 1) {
        const ob = {
          id: todos.length + 1,
          task: inputValue,
          is_completed: false,
        };
        setInputValue("");
        console.log(ob);
        dispatch(AddTodoAction(ob));
      }
    } catch (e) {
      console.log("Empty input");
    }
  };
  const handleEditFormSubmit = (e, editForm) => {
    e.preventDefault();
    setUpdateFormVisibility(false);
    setEditForm({ id: 0, task: "", is_completed: false });
    dispatch(EditByIdAction(editForm));
    // console.log(editForm);
  };
  return (
    <div className="AddTodoContainer">
      {updateFormVisibility ? (
        <form onSubmit={(e) => handleEditFormSubmit(e, editForm)}>
          <input
            maxLength="40"
            type="text"
            value={editForm.task || ""}
            onChange={(e) => setEditForm({ ...editForm, task: e.target.value })}
          />
          <button className="btn-submit" type="submit">
            UpdateTodo
          </button>
        </form>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            maxLength="40"
            type="text"
            value={inputValue || ""}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn-submit" type="submit" onClick={handleAddTodo}>
            AddTodo
          </button>
        </form>
      )}
    </div>
  );
};

export default AddTodo;
