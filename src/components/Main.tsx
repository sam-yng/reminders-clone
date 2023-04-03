import React, { useEffect, useMemo, useRef, useState } from "react";
import "../css/index.css";
import { useReminders } from "../utils/RemindersContext";
import check from "../assets/icons/checkmark.png";
import { v4 as uuidv4 } from "uuid";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import flag from "../assets/icons/red-flag.png";
import flag2 from "../assets/icons/image.png";
import BubbleLists from "./BubbleLists";

const Main: React.FC = () => {
  const { lists, activeListId, setLists, bubbleLists } = useReminders();
  const [name, setInput] = useState("");

  const allLists = lists.concat(bubbleLists);

  const activeList = useMemo(() => {
    return allLists.find((list) => list.id === activeListId);
  }, [lists, activeListId]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleAdd = (e: { code: string }) => {
    if (!activeList) {
      return;
    }

    if (e.code === "Enter") {
      const newTaskList = activeList.tasks.concat({
        id: uuidv4(),
        name,
        complete: false,
        flagged: false,
      });
      setLists(
        lists.map((list) =>
          list.id === activeListId
            ? { ...activeList, tasks: newTaskList }
            : list
        )
      );
      setInput("");
    }
  };

  if (!activeList) {
    return (
      <main className="w-[65%] ml-16 mt-8">
        <h1>hello</h1>
      </main>
    );
  }

  return (
    <main className="w-[65%] ml-16 mt-8">
      <article className="flex flex-row">
        <h1 className="text-[40px] font-robmedium">{activeList.name}</h1>
        <h1 className="text-[40px] ml-auto">{activeList.tasks.length}</h1>
      </article>

      <div>
        <div className="flex flex-row mt-8">
          <input
            onKeyDown={handleAdd}
            value={name}
            onChange={handleChange}
            type="text"
            className="pl-2 w-[50%] border-2 rounded-md border-blue-300"
            autoFocus
          ></input>
        </div>

        <ul>
          {activeList.tasks.map((item) => (
            <div className="ml-6 mt-6 w-[46%] flex flex-row">
              <li
                onClick={() =>
                  setLists(
                    lists.map((list) =>
                      list.id === activeListId
                        ? {
                            ...activeList,
                            tasks: activeList.tasks.filter(
                              (task) => task.id !== item.id
                            ),
                          }
                        : list
                    )
                  )
                }
                className="cursor-pointer hover:line-through text-[22px]"
                key={item.id}
              >
                {item.name}
              </li>
              <button
                onClick={() => (item.flagged = !item.flagged)}
                className="ml-auto"
              >
                <img
                  onClick={() => console.log(lists)}
                  className="h-5"
                  src={item.flagged === true ? check : flag}
                />
              </button>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Main;
