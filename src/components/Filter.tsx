import React from "react";

const Filter = () => {
  return (
    <div className="flex gap-2 px-8 py-6 md:px-16">
      <input
        type="text"
        name="search"
        placeholder="Location"
        className="w-2/6 px-3 py-2 focus:outline-none"
      />
      <input
        type="number"
        name="search"
        placeholder="Minimum Price"
        className="w-1/6 px-3 py-2 focus:outline-none"
        min={0}
      />
      <input
        type="number"
        name="search"
        placeholder="Maximum Price"
        className="w-1/6 px-3 py-2 focus:outline-none"
        min={0}
      />
      <button className="w-1/6 rounded-md border-pink-500 bg-pink-500 px-2 py-2 text-white transition duration-300 ease-in-out hover:border-[1px] hover:bg-transparent hover:text-slate-700">
        Search
      </button>
    </div>
  );
};

export default Filter;
