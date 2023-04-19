import React from "react";
import '../css/index.css'
import cross from '../assets/icons/close.png';
import { useReminders, List } from '../utils/RemindersContext';

const TaskList = ({ id, name }: List) => {
  const {
    lists, setLists, setActiveListId
  } = useReminders();

  if (id.length < 10) {
    return (
      <main className="w-[65%] ml-16 mt-8" />
    )
  }

  return (
      <div key={id} className="flex flex-row justify-between">
        <button type="button" onClick={() => setActiveListId(id)}>
          <li id="name" className="m-2 font-robreg">
            {name}
          </li>
        </button>
        <button
          type="button"
          onClick={() =>
            setLists(lists.filter((list) => list.id !== id))}
        >
          <img alt="cross" className="h-3" src={cross} />
        </button>
      </div>
  )
};

export default TaskList;
