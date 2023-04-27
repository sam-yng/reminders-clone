import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import { useReminders } from '../utils/RemindersContext';
import 'react-calendar/dist/Calendar.css';
import arrow from '../assets/icons/right-arrow.png';
import Task from './Task';
import TaskInput from './TaskInput';

const Main = () => {
  const {
    setActiveListId,
    activeList,
    input,
    setInput,
    setLists,
    lists,
    activeListId,
  } = useReminders();

  const handleBack = (e: { code: string }) => {
    if (e.code === 'Escape') {
      setActiveListId(null);
    }
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleTaskAdd = (e: { code: string }) => {
    if (!activeList) {
      return;
    }

    if (e.code === 'Enter') {
      const newTaskList = activeList.tasks.concat({
        id: uuidv4(),
        input,
        complete: false,
        flagged: false,
      });
      setLists(
        lists.map(list =>
          list.id === activeListId
            ? { ...activeList, tasks: newTaskList }
            : list)
      );
      setInput('');
    }
  };

  if (!activeList) {
    return <main className="w-[65%] ml-16 mt-8" />;
  }

  return (
    <main className="md:w-[65%] w-[80%] m-auto md:ml-16 md:mt-8">
      <button
      type="button"
      onClick={() => setActiveListId(null)}
      onKeyDown={handleBack}
      >
      <img
        alt="arrow"
        src={arrow}
        className="md:hidden block h-6 rotate-180 mt-4"
      />
      </button>
      <article className="flex flex-row mt-4">
        <h1 className="md:text-[40px] text-[25px] font-robmedium mb-4">
          {activeList.name}
        </h1>
        <h1 className="md:text-[40px] text-[20px] ml-auto">{activeList.tasks.length}</h1>
      </article>
      <TaskInput
        placeholder=''
        value={input}
        handleTaskAdd={handleTaskAdd}
        handleTaskChange={handleTaskChange}
      />
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
