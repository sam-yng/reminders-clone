import React from "react";
import "../css/index.css";
import Lists from "./Lists";
import { useReminders } from "../utils/RemindersContext";
import { v4 as uuidv4 } from "uuid";
import BubbleLists from "./BubbleLists";

const SideNav: React.FC = () => {
  const { lists, setLists } = useReminders();

  return (
    <nav className="w-[25%] h-[100%] border-r-2 border-gray-400 pt-6">
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
