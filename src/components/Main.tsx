import React, { useEffect, useMemo, useRef, useState } from "react";
import "../css/index.css";
import { useReminders } from "../utils/RemindersContext";
import check from "../assets/icons/checkmark.png";
import { v4 as uuidv4 } from "uuid";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import flag from "../assets/icons/red-flag.png";
import { Tasks, List } from "../utils/RemindersContext";
import calendar from "../assets/icons/calendar.png";

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

  let allTasks: Array<Tasks[]> = [];
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].tasks.length >= 0) {
      allTasks.splice(0, 0, lists[i].tasks);
    }
  }
  let newArr = allTasks.flat();

  let flaggedArr = newArr.filter(function (item) {
    return item.flagged === true;
  });

  let totalCount = 0;
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].tasks.length > 0) {
      totalCount += lists[i].tasks.length;
    }
  }

  if (!activeList) {
    return <main className="w-[65%] ml-16 mt-8"></main>;
  }

  const count = () => {
    if (activeList.name === "All") {
      let num = totalCount;
      return num;
    } else if (activeList.name === "Flagged") {
      let num = flaggedArr.length;
      return num;
    } else {
      let num = activeList.tasks.length;
      return num;
    }
  };

  const dateValue = document.querySelector('input[type="date');

  return (
    <main className="w-[65%] ml-16 mt-8">
      <article className="flex flex-row">
        <h1 className="text-[40px] font-robmedium">{activeList.name}</h1>
        <h1 className="text-[40px] ml-auto">{count()}</h1>
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

              <button className="ml-auto mr-6 w-36 flex p-2 border-2 border-slate-100 rounded-lg items-cente bg-slate-100">
                <img className="h-4 pl-2" src={calendar} />
                <input
                  className="bg-slate-100 w-[70%] ml-2 text-center text-[13px] focus:outline-none"
                  type="text"
                  placeholder="Add Date"
                />
              </button>

              <button
                onClick={() => {
                  item.flagged = !item.flagged;
                }}
                className="p-2 rounded-lg border-2 bg-slate-100 border-slate-100"
              >
                <img
                  className="h-5"
                  src={item.flagged === true ? check : flag}
                />
              </button>
            </div>
          ))}
        </ul>
        {activeList.name === "All" && (
          <ul>
            {newArr.map((item) => (
              <div className="ml-6 mt-6 w-[46%] flex flex-row">
                <li className="cursor-pointer text-[22px]">{item.name}</li>
                <button className="ml-auto mr-6 w-36 flex p-2 border-2 border-slate-100 rounded-lg items-cente bg-slate-100">
                  <img className="h-4 pl-2" src={calendar} />
                  <input
                    className="bg-slate-100 w-[70%] ml-2 text-center text-[13px] focus:outline-none"
                    type="text"
                    placeholder="Add Date"
                  />
                </button>

                <button
                  onClick={() => {
                    item.flagged = !item.flagged;
                  }}
                  className="p-2 rounded-lg border-2 bg-slate-100 border-slate-100"
                >
                  <img
                    className="h-5"
                    src={item.flagged === true ? check : flag}
                  />
                </button>
              </div>
            ))}
          </ul>
        )}
        {activeList.name === "Flagged" && (
          <ul>
            {flaggedArr.map((item) => (
              <div className="ml-6 mt-6 w-[46%] flex flex-row">
                <li className="cursor-pointer text-[22px]">{item.name}</li>
                <button className="ml-auto mr-6 w-36 flex p-2 border-2 border-slate-100 rounded-lg items-cente bg-slate-100">
                  <img className="h-4 pl-2" src={calendar} />
                  <input
                    className="bg-slate-100 w-[70%] ml-2 text-center text-[13px] focus:outline-none"
                    type="text"
                    placeholder="Add Date"
                  />
                </button>

                <button
                  onClick={() => {
                    item.flagged = !item.flagged;
                  }}
                  className="p-2 rounded-lg border-2 bg-slate-100 border-slate-100"
                >
                  <img
                    className="h-5"
                    src={item.flagged === true ? check : flag}
                  />
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default Main;
