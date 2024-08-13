import React from "react";

function Task({task, onDelete}) {


  return (
    <div className="task">
        <div>
        <span>{task.text}</span> - <span>{task.category}</span>
      </div>
      <button onClick={() =>onDelete(task.id)} className="delete">X</button>
    </div>
  );
}

export default Task;