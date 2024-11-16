import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import SearchTask from "./Components/Tasks/SearchTask/SearchTask";
import TaskLayout from "./Components/Tasks/TaskLayout";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return savedTasks;
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Save tasks to local storage whenever the tasks array changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const updatedTasks = [...tasks, { ...task, priority: "Medium" }];
    setTasks(updatedTasks); // Add new task
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const updateTaskPriority = (id, priority) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, priority } : task))
    );
  };

  const sortTasks = (taskList) => {
    return [...taskList].sort((a, b) => {
      if (sortBy === "alphabetical") {
        return a.title.localeCompare(b.title);
      } else if (sortBy === "priority") {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      return 0; // No sorting by default
    });
  };

  const getSortedTasks = () => {
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return sortTasks(filteredTasks);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-4/5">
        <Header />
        <div className="flex">
          <SearchTask setSearchQuery={setSearchQuery} setSortBy={setSortBy} />
          <TaskLayout
            toggleTaskCompletion={toggleTaskCompletion}
            addTask={addTask}
            tasks={getSortedTasks()}
            deleteTask={deleteTask}
            updateTaskPriority={updateTaskPriority}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
