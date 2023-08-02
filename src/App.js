import Container from "./Components/Container";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((store) => store.todo.todos);
  return <Container todos={todos} />;
}

export default App;
