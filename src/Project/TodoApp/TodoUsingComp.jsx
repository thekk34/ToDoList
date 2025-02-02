import { useState } from "react";
import "./Todo.css";
import { TodoDate } from "./TodoDate";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const TodoUsingComp = () => {
  // State to manage tasks
  const [task, setTask] = useState([]);

  // Function to add a new task
  const handleFormSubmit = (inputValue) => {
    if (!inputValue.trim()) return; // Prevent empty input

    // Check if task already exists
    if (task.some((curTask) => curTask.content === inputValue.trim())) return;

    setTask((prevTask) => [
      ...prevTask,
      { content: inputValue.trim(), checked: false },
    ]);
  };

  // Function to delete a task
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  // Function to clear all tasks
  const handleClearTodoData = () => {
    setTask([]);
  };

  // Function to toggle checked status
  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) =>
      curTask.content === content
        ? { ...curTask, checked: !curTask.checked }
        : curTask
    );
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        {/* Live Date & Time */}
        <TodoDate />
      </header>

      {/* Form to add tasks */}
      <TodoForm onAddTodo={handleFormSubmit} />

      {/* Task List */}
      <section className="myUnordList">
        <ul>
          {task.map((curTask, index) => (
            <TodoList
              key={index}
              data={curTask.content}
              checked={curTask.checked}
              onHandleDeleteTodo={handleDeleteTodo}
              onHandleCheckedTodo={handleCheckedTodo}
            />
          ))}
        </ul>
      </section>

      {/* Clear All Button */}
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
};
