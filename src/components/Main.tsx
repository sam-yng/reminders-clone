import React from 'react';
import '../css/index.css';
import { useReminders, Tasks } from '../utils/RemindersContext';
import 'react-calendar/dist/Calendar.css';
import arrow from '../assets/icons/right-arrow.png';
import Input from './Input';
import Task from './Task';

const Main = () => {
  const {
    lists,
    setActiveListId,
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
            <Task key={item.id} id={item.id} input={item.input} flagged={item.flagged} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Main;
