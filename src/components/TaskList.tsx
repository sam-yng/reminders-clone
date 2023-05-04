import React from "react";
import cross from "../assets/icons/close.png";
import { useReminders, List } from "../utils/RemindersContext";

const TaskList = ({ id, name }: List) => {
  const { lists, setLists, setActiveListId, setInput } = useReminders();

  const newListView = () => {
    setActiveListId(id);
    setInput("");
  };

  return (
    <div key={id} className="flex flex-row justify-between">
      <button type="button" onClick={newListView}>
        <li id="name" className="m-2 font-robreg">
          {name}
        </li>
      </button>
      <button
        type="button"
        onClick={() => setLists(lists.filter((list) => list.id !== id))}
      >
        <img alt="cross" className="h-3" src={cross} />
      </button>
    </div>
  );
};

export default TaskList;
