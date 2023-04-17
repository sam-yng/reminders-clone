import React from 'react';
import '../css/index.css';
import { useReminders, Tasks } from '../utils/RemindersContext';
import check from '../assets/icons/checkmark.png';
import 'react-calendar/dist/Calendar.css';
import flag from '../assets/icons/red-flag.png';
import calendar from '../assets/icons/calendar.png';
import arrow from '../assets/icons/right-arrow.png';
import Input from './Input';

const Main = () => {
  const {
    lists,
    activeListId,
    setActiveListId,
    setLists,
    activeList,
  } = useReminders();

  const allTasks: Array<Tasks[]> = [];
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].tasks.length >= 0) {
      allTasks.splice(0, 0, lists[i].tasks);
    }
  }
  const newArr = allTasks.flat();
  const flaggedArr = newArr.filter(item => item.flagged === true);

  const handleBack = (e: { code: string }) => {
    if (e.code === 'Escape') {
      setActiveListId(null);
    }
  };

  let totalCount = 0;
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].tasks.length > 0) {
      totalCount += lists[i].tasks.length;
    }
  }

  if (!activeList) {
    return <main className="w-[65%] ml-16 mt-8" />;
  }

  const count = () => {
    if (activeList.name === 'All') {
      const num = totalCount;
      return num;
    } else if (activeList.name === 'Flagged') {
      const num = flaggedArr.length;
      return num;
    } else {
      const num = activeList.tasks.length;
      return num;
    }
  };

  return (
    <main className="md:w-[65%] w-[80%] m-auto md:ml-16 md:mt-8">
      <img
        alt="arrow"
        src={arrow}
        onClick={() => setActiveListId(null)}
        onKeyDown={handleBack}
        className="md:hidden block h-6 rotate-180 mt-4"
      />
      <article className="flex flex-row mt-4">
        <h1 className="md:text-[40px] text-[25px] font-robmedium mb-4">
          {activeList.name}
        </h1>
        <h1 className="md:text-[40px] text-[20px] ml-auto">{count()}</h1>
      </article>
      <Input placeholder="" />
      <div>
        <ul>
          {activeList.tasks.map(item => (
            <div key={item.id} className="md:ml-6 mt-6 md:w-[46%] flex flex-row">
              <li
                onClick={() =>
                  setLists(
                    lists.map(list =>
                      list.id === activeListId
                        ? {
                          ...activeList,
                          tasks: activeList.tasks.filter(
                            task => task.id !== item.id
                          ),
                        }
                        : list)
                  )}
                className="cursor-pointer hover:line-through text-[18px] md:text-[22px]"
              >
                {item.input}
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
                onClick={() =>
                  setLists(
                    lists.map(list =>
                      list.id === activeListId
                        ? {
                          ...activeList,
                          tasks: activeList.tasks.map(task =>
                            task.id === item.id
                              ? {
                                ...item,
                                flagged: !item.flagged,
                              }
                              : task),
                        }
                        : list)
                  )}
                className="p-2 rounded-lg border-2 bg-slate-100 border-slate-100"
              >
                <img
                  alt="flag"
                  className="h-5"
                  src={item.flagged === true ? check : flag}
                />
              </button>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Main;
