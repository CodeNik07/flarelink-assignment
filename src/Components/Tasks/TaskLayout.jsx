import React from "react";
import AddTask from "./AddTask/AddTask";
import TaskList from "./TaskList/TaskList";

export default function TaskLayout({toggleTaskCompletion,updateTaskPriority, addTask, tasks, deleteTask }) {
  return (
    <div className="w-full pt-6 ml-3">
      <AddTask addTask={addTask} />
      <TaskList
        toggleTaskCompletion={toggleTaskCompletion}
        tasks={tasks}
        deleteTask={deleteTask}
        updateTaskPriority={updateTaskPriority}
      />
    </div>
  );
}
