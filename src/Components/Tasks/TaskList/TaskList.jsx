import React from "react";
import TaskCard from "../TaskCard/TaskCard";

export default function TaskList({
  toggleTaskCompletion,
  updateTaskPriority,
  tasks,
  deleteTask,
}) {
  return (
    <>
      {tasks.length === 0 ? (
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-slate-200 w-32 h-32 rounded-lg shadow-xl flex justify-center items-center">
            <h1 className="font-semibold text-blue-500">No Task Found</h1>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 mt-4">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              toggleTaskCompletion={toggleTaskCompletion}
              task={task}
              deleteTask={deleteTask}
              updateTaskPriority={updateTaskPriority}
            />
          ))}
        </div>
      )}
    </>
  );
}
