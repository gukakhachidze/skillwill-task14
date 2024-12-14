import React, { useState, useCallback, useReducer } from "react";
import Task from "./components/Task";
import { todoReducer } from "./reducers/todoReducer";

function App() {
  const [task, setTask] = useState("");
  const [state, dispatch] = useReducer(todoReducer, {
    todoList: [],
    completedList: [],
  });

  const addTask = useCallback(() => {
    if (task.trim()) {
      dispatch({ type: "ADD_TASK", payload: task });
      setTask("");
    }
  }, [task]);

  const completeTask = useCallback((index) => {
    dispatch({ type: "COMPLETE_TASK", payload: index });
  }, []);

  const deleteTask = useCallback((index) => {
    dispatch({ type: "DELETE_TASK", payload: index });
  }, []);

  const moveToTodo = useCallback((index) => {
    dispatch({ type: "MOVE_TO_TODO", payload: index });
  }, []);

  return (
    <div style={styles.container}>
      <h1>ToDo სია</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="შემოიყვანე დავალება"
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>
          დამატება
        </button>
      </div>
      <div style={styles.listContainer}>
        <div style={styles.column}>
          <h2>შესასრულებელი</h2>
          {state.todoList.map((task, index) => (
            <Task
              key={index}
              task={task}
              onComplete={() => completeTask(index)}
              completed={false}
            />
          ))}
        </div>
        <div style={styles.column}>
          <h2>შესრულებული</h2>
          {state.completedList.map((task, index) => (
            <Task
              key={index}
              task={task}
              onDelete={() => deleteTask(index)}
              onMoveToTodo={() => moveToTodo(index)}
              completed={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px", textAlign: "center" },
  input: { padding: "10px", marginRight: "10px" },
  button: { padding: "10px", margin: "5px", cursor: "pointer" },
  listContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  column: { width: "45%", textAlign: "left" },
};

export default App;
