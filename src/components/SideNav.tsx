import React, {
  ReactComponentElement,
  useEffect,
  useMemo,
  useState,
} from "react";
import "../css/index.css";
import Bubble from "./Bubble";
import calendartwo from "../assets/icons/calendar-two.png";
import calendar from "../assets/icons/calendar.png";
import boxes from "../assets/icons/boxes.png";
import flag from "../assets/icons/red-flag.png";
import Lists from "./Lists";
import { useReminders } from "../utils/RemindersContext";
import { v4 as uuidv4 } from "uuid";

const SideNav = () => {
  const { lists, setLists } = useReminders();

  let totalCount = 0;
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].tasks.length > 0) {
      totalCount += lists[i].tasks.length;
    }
  }

  return (
    <nav className="w-[25%] h-[100%] border-r-2 border-gray-400 pt-6">
      <input
        type="text"
        placeholder="Search"
        className="w-[94%] flex m-auto pl-4 border-2 rounded-md"
      />
      <div className="flex flex-row mt-4">
        <Bubble id={uuidv4()} title="Today" icon={calendartwo} />
        <Bubble id={uuidv4()} title="Scheduled" icon={calendar} />
      </div>
      <div className="flex flex-row">
        <Bubble id={uuidv4()} title="All" icon={boxes} counter={totalCount} />
        <Bubble id={uuidv4()} title="Flagged" icon={flag} />
      </div>
      <Lists />
    </nav>
  );
};

export default SideNav;
