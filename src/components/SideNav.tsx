import React from 'react';
import '../css/index.css';
import { Tasks, useReminders } from '../utils/RemindersContext';
import Bubble from './ListView';
import Main from './Main';
import calendartwo from '../assets/icons/calendar-two.png';
import calendar from '../assets/icons/calendar.png';
import boxes from '../assets/icons/boxes.png';
import flag from '../assets/icons/red-flag.png';
import Input from './Input';
import TaskList from './TaskList';

const SideNav = () => {
  const { activeListId, lists } = useReminders();

  const allTasks: Array<Tasks[]> = [];
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].tasks.length >= 0) {
      allTasks.splice(0, 0, lists[i].tasks);
    }
  }

  if (activeListId !== null) {
    return (
      <>
        <nav className="md:hidden">
          <Main />
        </nav>
        <nav className="md:w-[25%] m-4 md:m-0 h-[100%] md:border-r-2 border-gray-400 pt-6">
          <Input placeholder="Search" />
          <ul className="grid grid-cols-2">
            <Bubble name="Today" icon={calendartwo} />
            <Bubble name="Scheduled" icon={calendar} />
            <Bubble name="All" icon={boxes} />
            <Bubble name="Flagged" icon={flag} />
          </ul>
          <Input placeholder="Add List" />
          <h1 className="text-gray-500 ml-[18px] mt-5">My Lists</h1>
            <ul className="ml-[16px] mt-2 mr-[16px]">
              {lists.map(list => (
                <TaskList key={list.id} id={list.id} name={list.name} tasks={list.tasks} />
              ))}
            </ul>
        </nav>
      </>
    );
  }

  return (
    <nav className="md:w-[25%] m-4 md:m-0 h-[100%] md:border-r-2 border-gray-400 pt-6">
      <Input placeholder="Search" />
      <ul className="grid grid-cols-2">
        <Bubble name="Today" icon={calendartwo} />
        <Bubble name="Scheduled" icon={calendar} />
        <Bubble name="All" icon={boxes} />
        <Bubble name="Flagged" icon={flag} />
      </ul>
      <Input placeholder="Add List" />
      <h1 className="text-gray-500 ml-[18px] mt-5">My Lists</h1>
        <ul className="ml-[16px] mt-2 mr-[16px]">
          {lists.map(list => (
            <TaskList key={list.id} id={list.id} name={list.name} tasks={list.tasks} />
          ))}
        </ul>
    </nav>
  );
};

export default SideNav;
