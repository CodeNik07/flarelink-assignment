import React from "react";

export default function SearchTask({ setSearchQuery, setSortBy }) {
  
  const handleSort = (sortOption) => {
    setSortBy(sortOption); // Update sorting criteria
    console.log("Sort option selected:", sortOption);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Update search query on input change
  };
  
  return (
    <div className="w-3/12 h-auto pt-6">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search task"
          onChange={handleSearch}
          className="m-2 p-2 text-sm w-full rounded-3xl border-2 border-slate-500"
        />
      </div>
      <div className="w-full mt-2 flex flex-col">
        <span className="">Sort by :-</span>
        <button
          onClick={() => handleSort("alphabetical")}
          className="w-full text-left mt-3 p-2 text-lg cursor-pointer hover:bg-blue-400 hover:text-white hover:rounded-md"
        >
          Alphabetically
        </button>
        <button
          onClick={() => handleSort("priority")}
          className="w-full text-left mt-3 p-2 text-lg cursor-pointer hover:bg-blue-400 hover:text-white hover:rounded-md"
        >
          Priority
        </button>
      </div>
    </div>
  );
}
