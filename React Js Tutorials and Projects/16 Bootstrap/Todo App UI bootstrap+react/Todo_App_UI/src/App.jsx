import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <AppName />

      <div className="item-container">
        <AddTodo />
        <TodoItem1 />
        <TodoItem2 />
        <TodoItem1></TodoItem1>
      </div>
    </center>
  );
}

export default App;

{
  /*Note: Before React 16 (version of React.js) you can not write class in JSX file, only className is acceptable. After React js version 16 you can specify className as class. But it is goog practice to wirte className. */
}
