import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function AddTask({ addTask }) {
  
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && desc.trim()) {
      addTask({ id: uuidv4(), title, desc, isCompleted: false });
      setTitle("");
      setDesc("");
    } else {
      alert("Please enter title and description");
    }
  };
  
  return (
    <div className="m-1">
      <h1 className="mb-2 font-bold text-xl">Add Tasks</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder=" Title"
            className="p-2 mr-4 w-80 rounded-full border-2 border-slate-500"
          />
          <input
            type="text"
            value={desc}
            onChange={(e)=> setDesc(e.target.value)}
            placeholder=" Description"
            className="p-2 mr-4 w-80 rounded-full border-2 border-slate-500"
          />
          <button type="submit" className="w-32 bg-green-400 p-3 text-sm text-white font-bold rounded-md">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
