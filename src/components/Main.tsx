import React from 'react';
import '../css/index.css';
import { useReminders } from '../utils/RemindersContext';
import 'react-calendar/dist/Calendar.css';
import arrow from '../assets/icons/right-arrow.png';
import Input from './Input';
import Task from './Task';

const Main = () => {
  const {
    setActiveListId,
    activeList,
  } = useReminders();

  const handleBack = (e: { code: string }) => {
    if (e.code === 'Escape') {
      setActiveListId(null);
    }
  };

  if (!activeList) {
    return <main className="w-[65%] ml-16 mt-8" />;
  }

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
        <h1 className="md:text-[40px] text-[20px] ml-auto">{activeList.tasks.length}</h1>
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
