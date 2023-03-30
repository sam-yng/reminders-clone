import React, { useEffect, useMemo, useRef, useState } from "react";
import "../css/index.css";
import SideNav from "./SideNav";
import Lists from "./Lists";
import { useReminders } from "../utils/RemindersContext";
import check from "../assets/icons/checkmark.png";
import { v4 as uuidv4 } from "uuid";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Main: React.FC = () => {
  const { lists, activeListId, setLists } = useReminders();
  const [name, setInput] = useState("");

  const activeList = useMemo(() => {
    return lists.find((list) => list.id === activeListId);
  }, [lists, activeListId]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleAdd = () => {
    if (!activeList) {
      return;
    }

    const newTaskList = activeList.tasks.concat({
      id: uuidv4(),
      name,
      complete: false,
    });
    setLists(
      lists.map((list) =>
        list.id === activeListId ? { ...activeList, tasks: newTaskList } : list
      )
    );
    setInput("");
  };

  if (!activeList) {
    return <main className="w-[65%] ml-16 mt-8"></main>;
  }

  return (
    <main className="w-[65%] ml-16 mt-8">
      <article className="flex flex-row">
        <h1 className="text-[40px] font-robmedium">{activeList.name}</h1>
      </article>

      <div>
        <div className="flex flex-row mt-8">
          <input
            value={name}
            onChange={handleChange}
            type="text"
            className="pl-2 w-[50%] border-2 rounded-md border-blue-300"
            autoFocus
          ></input>
          <button onClick={handleAdd} className="ml-4">
            <img className="h-8" src={check} />
          </button>
        </div>

        <ul>
          {activeList.tasks.map((item) => (
            <div className="ml-6 mt-6">
              <li className="cursor-pointer hover:line-through" key={item.id}>
                {item.name}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Main;
