import React from "react";
import '../css/index.css'
import { Tasks, useReminders } from '../utils/RemindersContext'
import calendar from '../assets/calendar-two.png'
import check from '../assets/checkmark.png'
import flag from '../assets/image.png'

const Task = ({ id, input, flagged }: Tasks) => {
  const {
    activeList,
  } = useReminders();

  return (
    <div key={id} className="md:ml-6 mt-6 md:w-[46%] flex flex-row">
      <li
        onClick={() =>
          activeList?.tasks.filter(
            task => task.id !== id
          )
        }
        className="cursor-pointer hover:line-through text-[18px] md:text-[22px]"
      >
        {input}
      </li>
      <button type="button" className="ml-auto mr-6 w-36 flex p-2 border-2 border-slate-100 rounded-lg items-cente bg-slate-100">
        <img alt="icon" className="h-4 pl-2" src={calendar} />
        <input
          name="date"
          className="bg-slate-100 w-[70%] ml-2 text-center text-[13px] focus:outline-none"
          type="text"
          placeholder="Add Date"
        />
      </button>

      <button
        type="button"
        className="p-2 rounded-lg border-2 bg-slate-100 border-slate-100"
        onClick={() =>
          activeList?.tasks.map(task =>
            task.id === id ? {
              ...task,
              flagged: !task.flagged,
            } : task)
        }
      >
        <img
          alt="flag"
          className="h-5"
          src={flagged === true ? check : flag}
        />
      </button>
    </div>
  )
};

export default Task;
