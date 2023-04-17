import React, { useEffect } from 'react';
import '../css/index.css';
import { List, useReminders } from '../utils/RemindersContext';

const Bubble = ({
  id, name, icon, tasks
}: List) => {
  const { setActiveListId, setLists, lists } = useReminders();

  return (
    <button
      type="button"
      onClick={() => console.log(lists)}
      className="border-2 bg-slate-100 border-slate-100 m-3 p-2 rounded-lg"
    >
      <div className="flex flex-row justify-between">
        <img
          className="h-8"
          alt="icon"
          src={icon}
        />
        <h1 className="text-[22px]">{tasks.length}</h1>
      </div>
      <h1 className="pt-2 text-left text-[18px]">{name}</h1>
    </button>
  );
};

export default Bubble;
