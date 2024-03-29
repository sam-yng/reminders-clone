import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useReminders } from "../utils/RemindersContext";
import ListView from "./ListView";
import { TextInput } from "./Inputs/TextInput";
import TaskList from "./TaskList";
import calendartwo from "../assets/icons/calendar-two.png";
import calendar from "../assets/icons/calendar.png";
import boxes from "../assets/icons/boxes.png";
import flag from "../assets/icons/red-flag.png";
import SearchInput from "./Inputs/SearchInput";
import ThemeButton from "./ThemeButton";
import Main from "./Main";

const SideNav = () => {
  const {
    selectedList: activeListId,
    setActiveListId,
    lists,
    setLists,
    theme,
  } = useReminders();
  const [name, setName] = useState<string>("");

  const handleListAdd = () => {
    if (name.length < 1) {
      return;
    }

    lists.splice(0, 0, { id: uuidv4(), name });
    setLists(lists.filter((list) => list.id));
    setName("");
    setActiveListId({ listId: lists[0].id });
  };

  return (
    <nav
      className={`md:w-[25%] ${
        activeListId ? "hidden" : "visible"
      } md:block p-4 md:m-0 h-full md:border-r-2 border-gray-400 pt-4`}
    >
      <div className="flex flex-row items-center justify-between">
        <h1 className="ml-4 font-robmedium text-[20px]">Reminder Clone</h1>
        <ThemeButton />
      </div>
      <SearchInput placeholder="Search" />
      <div className="grid grid-cols-2">
        <ListView type="today" icon={calendartwo} />
        <ListView type="scheduled" icon={calendar} />
        <ListView type="all" icon={boxes} />
        <ListView type="flagged" icon={flag} />
      </div>
      <TextInput
        placeholder="Add List"
        value={name}
        onEnter={handleListAdd}
        onChange={setName}
      />
      <h1 className="opacity-80 ml-[18px] mt-5">My Lists</h1>
      <ul className="ml-4 mt-2 mr-2">
        {lists.map((list) => (
          <TaskList key={list.id} id={list.id} name={list.name} />
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
