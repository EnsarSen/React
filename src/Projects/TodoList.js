import "./App.css";
import { useState } from "react";
import { Task } from "./Task";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const isCompleted = (id) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, completed: true } : task,
      ),
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <h1 style={{ color: "purple" }}>Ensar's Todo List</h1>
        <br />
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>

      <div className="list">
        {todoList.map((task) => (
          <Task
            taskName={task.taskName}
            deleteTask={deleteTask}
            completed={task.completed}
            id={task.id}
            isCompleted={isCompleted}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
