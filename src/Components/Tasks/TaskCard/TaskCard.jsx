import React, { useState } from "react";

export default function TaskCard({updateTaskPriority, toggleTaskCompletion, task, deleteTask }) {
  
  const handlePriorityChange = (e) => {
    updateTaskPriority(task.id, e.target.value); // Update the task priority
  };

  return (
    <div className="bg-slate-100 p-4 m-2 rounded-lg h-auto drop-shadow-xl">
      <div className="flex items-center align-middle justify-between">
        <h2 className="text-2xl mb-3 truncate">{task.title}</h2>
        <button
          className="hover:bg-red-600 hover:text-white m-2 p-2"
          onClick={() => deleteTask(task.id)}
        >
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-trash-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
          </svg>
        </button>
      </div>
      <span className="text-wrap">{task.desc}</span>
      <div className="flex gap-2 mt-2 mb-2 pt-2 pb-2">
        <input
          type="checkbox"
          name="task-completed"
          onChange={() => toggleTaskCompletion(task.id)}
          checked={task.isCompleted}
        />
        <label htmlFor="task-completed">Completed</label>
      </div>
      <div>
        <label htmlFor="task-priority">Priority : </label>
        <select name="task-priority" value={task.priority} onChange={handlePriorityChange}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
    </div>
  );
}
