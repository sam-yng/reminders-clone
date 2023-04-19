/* eslint-disable no-param-reassign */
import React from 'react';
import '../css/index.css';
import { useReminders } from '../utils/RemindersContext';
import calendartwo from '../assets/icons/calendar-two.png';
import calendar from '../assets/icons/calendar.png';
import boxes from '../assets/icons/boxes.png';
import flag from '../assets/icons/red-flag.png';

type ListViewProps = {
  icon: string
  count?: number
  name: string
}

const ListView = ({ icon, count, name }: ListViewProps) => {
  const { setActiveListId } = useReminders();

  if (name === "All") {icon = boxes}
  if (name === "Flagged") {icon = flag}
  if (name === "Today") {icon = calendartwo}
  if (name === "Scheduled") {icon = calendar}

  return (
    <button
      type="button"
      className="border-2 bg-slate-100 border-slate-100 m-3 p-2 rounded-lg"
      onClick={() => setActiveListId(name)}
    >
      <div className="flex flex-row justify-between">
        <img
          className="h-8"
          alt="icon"
          src={icon}
        />
        <h1 className="text-[22px]">{count}</h1>
      </div>
      <h1 className="pt-2 text-left text-[18px]">{name}</h1>
    </button>
  );
};

ListView.defaultProps = {
  count: 0
}

export default ListView;
