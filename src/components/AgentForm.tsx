"use client";
import React, { useState } from "react";
import { MapPinned, CircleUserRound } from "lucide-react";
import { agents } from "./data";
import Image from "next/image";
const AgentForm = () => {
  const [search, setSearch] = useState("location");
  const [keys, setKeys] = useState("");
  const [data, setData] = useState(agents);
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearch(event.target.value);
    console.log(search);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const values = e.target.value;
    if (search === "location") {
      const datas = agents.filter((datas) =>
        datas.location.toLowerCase().includes(values.toLowerCase()),
      );
      setData(datas);
    } else {
      const datas = agents.filter((datas) =>
        datas.name.toLowerCase().includes(values.toString().toLowerCase()),
      );
      setData(datas);
    }
  };

  return (
    <div>
      <form className="flex items-center justify-center gap-2">
        <div>
          <select
            name="search"
            id="search"
            value={search}
            onChange={handleChange}
            className="px-3 py-2"
          >
            <option value="location">Search by Location</option>
            <option value="name">Search by Name</option>
          </select>
        </div>
        {search === "location" ? (
          <div className="flex items-center gap-1 rounded-md border-[1px] border-slate-300 px-2">
            <MapPinned />
            <input
              type="text"
              name="Location"
              placeholder="Location"
              className="rounded-md px-3 py-2 focus:outline-none"
              onChange={handleSearch}
            />
          </div>
        ) : (
          <div className="flex items-center gap-1 rounded-md border-[1px] border-slate-300 px-2">
            <CircleUserRound />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="rounded-md px-3 py-2 focus:outline-none"
              onChange={handleSearch}
            />
          </div>
        )}

        <button className="rounded-md bg-black/70 px-5 py-2 text-white">
          Search
        </button>
      </form>
      <div className="mx-auto my-4 grid max-w-[70%] gap-8 sm:grid-cols-2">
        {data.map((agents) => (
          <div
            key={agents.number}
            className="flex transform cursor-pointer items-center gap-2 rounded-md border-2 border-slate-200 px-4 py-2 shadow-md transition-all duration-300 ease-in-out hover:scale-105"
          >
            <Image
              src={agents.image}
              width={128}
              height={128}
              alt="Agent"
              className="h-32 w-32 rounded-full"
            />
            <div className="ml-4">
              <p className="text-[17px] font-semibold capitalize">
                {agents.name}
              </p>
              <p className="py-2 text-[15px] capitalize text-slate-500">
                {agents.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentForm;
