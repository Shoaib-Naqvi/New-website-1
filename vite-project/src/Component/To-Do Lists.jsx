import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]); // State for list of tasks
  const [newTask, setNewTask] = useState(""); // State for input field

  // Function to add task
  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Please enter a task!");
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask(""); // clear input
  };

  // Function to delete task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h2>📝 Simple To-Do List</h2>

      <div style={styles.inputSection}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.listItem}>
            {task}
            <button
              onClick={() => deleteTask(index)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}





const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "12px",
    width: "350px",
    margin: "auto",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  inputSection: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: "1",
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "8px 12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    background: "#fff",
    margin: "5px 0",
    padding: "8px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "5px 8px",
    cursor: "pointer",
  },
};

export default TodoList;