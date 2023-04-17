import React from 'react';
import '../css/index.css';
import { v4 as uuidv4 } from 'uuid';
import Lists from './Lists';
import { Tasks, useReminders } from '../utils/RemindersContext';
import Bubble from './Bubble';
import Main from './Main';
import calendartwo from '../assets/icons/calendar-two.png';
import calendar from '../assets/icons/calendar.png';
import boxes from '../assets/icons/boxes.png';
import flag from '../assets/icons/red-flag.png';
import Input from './Input';

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
          <ul>
            <Bubble tasks={[]} name="Today" icon={calendartwo} id={uuidv4()} />
            <Bubble tasks={[]} name="Scheduled" icon={calendar} id={uuidv4()} />
            <Bubble tasks={[]} name="All" icon={boxes} id={uuidv4()} />
            <Bubble tasks={[]} name="Flagged" icon={flag} id={uuidv4()} />
          </ul>
          <Input placeholder="Add List" />
          <Lists />
        </nav>
      </>
    );
  }

  return (
    <nav className="md:w-[25%] m-6 md:m-0 h-[100%] md:border-r-2 border-gray-400 pt-6">
      <Input placeholder="Search" />
      <ul className="grid grid-cols-2">
        <Bubble tasks={[]} name="Today" icon={calendartwo} id={uuidv4()} />
        <Bubble tasks={[]} name="Scheduled" icon={calendar} id={uuidv4()} />
        <Bubble tasks={[]} name="All" icon={boxes} id={uuidv4()} />
        <Bubble tasks={[]} name="Flagged" icon={flag} id={uuidv4()} />
      </ul>
      <Input placeholder="Add List" />
      <Lists />
    </nav>
  );
};

export default SideNav;
