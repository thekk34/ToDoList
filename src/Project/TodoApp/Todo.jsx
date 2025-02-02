import { useState, useEffect } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./Todo.css";

export const Todo = () => {
  // State to manage task input, list, and date-time
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  // Update Date & Time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to add a new todo
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) return; // Prevent empty tasks

    // Check if task already exists
    if (task.includes(inputValue.trim())) {
      setInputValue(""); // Clear input field if duplicate
      return;
    }

    // Add new task while keeping previous tasks
    setTask((prevTask) => [...prevTask, inputValue.trim()]);

    setInputValue(""); // Clear input field after adding
  };

  // Function to delete a specific todo
  const handleDelete = (value) => {
    const updatedTask = task.filter((currTask) => currTask !== value);
    setTask(updatedTask);
  };

  // Function to clear all todos
  const handleClearButton = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        {/* Live Date & Time Below the Header */}
        <h2 className="date-time">{dateTime}</h2>
      </header>

      {/* Form to add tasks */}
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>

      {/* Task List */}
      <section className="myUnordList">
        <ul>
          {task.map((item, index) => (
            <li key={index} className="todo-item">
              <span>{item}</span>
              <button className="check-btn">
                <MdCheck />
              </button>
              <button className="delete-btn" onClick={() => handleDelete(item)}>
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Clear All Button */}
      <section>
        <button className="clear-btn" onClick={handleClearButton}>
          Clear All
        </button>
      </section>
    </section>
  );
};


