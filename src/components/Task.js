import React from "react";

const Task = React.memo(
  ({ task, onComplete, onDelete, onMoveToTodo, completed }) => {
    console.log("Rendered:", task); // Debugging
    return (
      <div style={styles.task}>
        <span>{task}</span>
        {!completed ? (
          <button onClick={onComplete} style={styles.button}>
            შესრულება
          </button>
        ) : (
          <>
            <button onClick={onMoveToTodo} style={styles.button}>
              უკან დაბრუნება
            </button>
            <button onClick={onDelete} style={styles.deleteButton}>
              წაშლა
            </button>
          </>
        )}
      </div>
    );
  }
);

const styles = {
  task: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  button: { padding: "10px", margin: "5px", cursor: "pointer" },
  deleteButton: {
    padding: "10px",
    margin: "5px",
    cursor: "pointer",
    backgroundColor: "red",
    color: "white",
  },
};

export default Task;
