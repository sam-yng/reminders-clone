import React from "react";
import "../css/index.css";
import { Tasks, useReminders } from "../utils/RemindersContext";
import calendartwo from "../assets/icons/calendar-two.png";
import calendar from "../assets/icons/calendar.png";
import boxes from "../assets/icons/boxes.png";
import flag from "../assets/icons/red-flag.png";

const BubbleLists: React.FC = () => {
  const { setActiveListId, lists, setLists, bubbleLists, setBubbleLists } =
    useReminders();

  let totalCount = 0;
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].tasks.length > 0) {
      totalCount += lists[i].tasks.length;
    }
  }

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

  return (
    <ul className="grid grid-cols-2">
      {bubbleLists.map((item) => (
        <button
          onClick={() => setActiveListId(item.id)}
          className="border-2 bg-slate-50 m-3 p-2 rounded-lg"
        >
          <li key={item.id}>
            <div className="flex flex-row justify-between">
              {item.name === "Today" && (
                <>
                  <img className="h-8" src={calendartwo} />
                  <h1 className="text-[22px]">{0}</h1>
                </>
              )}
              {item.name === "Scheduled" && (
                <>
                  <img className="h-8" src={calendar} />
                  <h1 className="text-[22px]">{0}</h1>
                </>
              )}
              {item.name === "All" && (
                <>
                  <img className="h-8" src={boxes} />
                  <h1 className="text-[22px]">{totalCount}</h1>
                </>
              )}
              {item.name === "Flagged" && (
                <>
                  <img className="h-8" src={flag} />
                  <h1 className="text-[22px]">{flaggedArr.length}</h1>
                </>
              )}
            </div>

            <h1 className="pt-2 text-left text-[18px]">{item.name}</h1>
          </li>
        </button>
      ))}
    </ul>
  );
};

export default BubbleLists;
