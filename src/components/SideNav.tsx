import React, { ReactComponentElement, useEffect, useState } from "react";
import "../css/index.css";
import Bubble from "./Bubble";
import calendartwo from "../assets/icons/calendar-two.png";
import calendar from "../assets/icons/calendar.png";
import boxes from "../assets/icons/boxes.png";
import flag from "../assets/icons/red-flag.png";
import Lists from "./Lists";

const SideNav = (props: any) => {
  const [data, setData] = useState('')

  props.func(data)

  const listsToNav = (listData: string) => {
      setData(listData)
  }

  return (
    <nav className="w-[25%] h-[100%] border-r-2 border-gray-400 pt-6">
      <input
        type="text"
        placeholder="Search"
        className="w-[94%] flex m-auto pl-4 border-2 rounded-md"
      />
      <div className="flex flex-row mt-4">
        <Bubble title="Today" icon={calendartwo} />
        <Bubble title="Scheduled" icon={calendar} />
      </div>
      <div className="flex flex-row">
        <Bubble title="All" icon={boxes} />
        <Bubble title="Flagged" icon={flag} />
      </div>
      <Lists listsToNav={listsToNav} />
    </nav>
  );
};

export default SideNav;
