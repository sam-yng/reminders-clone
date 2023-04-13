import React, { useState } from "react";
import "../css/index.css";
import Lists from "./Lists";
import { useReminders } from "../utils/RemindersContext";
import { v4 as uuidv4 } from "uuid";
import BubbleLists from "./BubbleLists";
import Main from "./Main";

const SideNav: React.FC = () => {
  const { lists, setLists, activeListId } = useReminders();

  if (activeListId !== null) {
    return <Main />;
  }

  return (
    <nav className="md:w-[25%] m-4 md:m-0 h-[100%] md:border-r-2 border-gray-400 pt-6">
      <input
        type="text"
        placeholder="Search"
        className="w-[94%] flex m-auto pl-4 border-2 rounded-md"
      />
      <BubbleLists />
      <Lists />
    </nav>
  );
};

export default SideNav;
