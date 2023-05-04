/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback } from "react";
import { Tasks, useReminders } from "../utils/RemindersContext";
import calendar from "../assets/icons/calendar-two.png";
import check from "../assets/icons/checkmark.png";
import flag from "../assets/icons/image.png";

const Task = ({ id, input, flagged }: Tasks) => {
  const { activeList, setLists, lists, activeListId } = useReminders();

  if (!activeList) {
    return <div className="w-[65%] ml-16 mt-8" />;
  }

  const onClickRemove = useCallback(() => {
    setLists(
      lists.map((list) =>
        list.id === activeListId
          ? {
              ...activeList,
              tasks: activeList.tasks.filter((task) => task.id !== id),
            }
          : list
      )
    );
  }, [activeList, activeListId, id, lists, setLists]);

  const onClickFlagTask = useCallback(() => {
    setLists(
      lists.map((list) =>
        list.id === activeListId
          ? {
              ...activeList,
              tasks: activeList.tasks.map((task) =>
                task.id === id
                  ? {
                      ...task,
                      flagged: !flagged,
                    }
                  : task
              ),
            }
          : list
      )
    );
  }, [activeList, activeListId, flagged, id, lists, setLists]);

  return (
    <div className="md:ml-6 mt-6 md:w-[46%] flex flex-row">
      <button
        type="button"
        onClick={onClickRemove}
        className="cursor-pointer hover:line-through text-[18px] md:text-[22px]"
      >
        <li>{input}</li>
      </button>
      <div className="ml-auto mr-6 w-36 flex p-2 border-2 border-slate-100 rounded-lg items-cente bg-slate-100">
        <img alt="icon" className="h-4 pl-2" src={calendar} />
        <input
          name="date"
          className="bg-slate-100 w-[70%] ml-2 text-center text-[13px] focus:outline-none"
          type="text"
          placeholder="Add Date"
        />
      </div>

      <button
        onClick={onClickFlagTask}
        type="button"
        className="p-2 rounded-lg border-2 bg-slate-100 border-slate-100"
      >
        <img alt="flag" className="h-5" src={flagged === true ? check : flag} />
      </button>
    </div>
  );
};

export default Task;
