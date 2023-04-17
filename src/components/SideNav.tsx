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

const SideNav = () => {
  const { activeListId, lists } = useReminders();

  let totalCount = 0;
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].tasks.length > 0) {
      totalCount += lists[i].tasks.length;
    }
  }

  const allTasks: Array<Tasks[]> = [];
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].tasks.length >= 0) {
      allTasks.splice(0, 0, lists[i].tasks);
    }
  }
  const newArr = allTasks.flat();

  const flaggedArr = newArr.filter((item) => item.flagged === true);

  if (activeListId !== null) {
    return (
      <>
        <nav className="md:hidden">
          <Main />
        </nav>
        <nav className="md:w-[25%] m-4 md:m-0 h-[100%] md:border-r-2 border-gray-400 pt-6">
          <input
            type="text"
            placeholder="Search"
            className="w-[94%] mb-4 md:mb-0 flex m-auto pl-4 border-2 rounded-md"
          />
          <ul>
            <Bubble title="Today" icon={calendartwo} counter={0} id={uuidv4()} />
            <Bubble title="Scheduled" icon={calendar} counter={0} id={uuidv4()} />
            <Bubble title="All" icon={boxes} counter={totalCount} id={uuidv4()} />
            <Bubble title="Flagged" icon={flag} counter={flaggedArr.length} id={uuidv4()} />
          </ul>
          <Lists />
        </nav>
      </>
    );
  }

  return (
    <nav className="md:w-[25%] m-6 md:m-0 h-[100%] md:border-r-2 border-gray-400 pt-6">
      <input
        type="text"
        placeholder="Search"
        className="w-[94%] mb-4 md:mb-0 flex m-auto pl-4 border-2 rounded-md"
      />
      <ul className="grid grid-cols-2">
        <Bubble title="Today" icon={calendartwo} counter={0} id={uuidv4()} />
        <Bubble title="Scheduled" icon={calendar} counter={0} id={uuidv4()} />
        <Bubble title="All" icon={boxes} counter={totalCount} id={uuidv4()} />
        <Bubble title="Flagged" icon={flag} counter={flaggedArr.length} id={uuidv4()} />
      </ul>
      <Lists />
    </nav>
  );
};

export default SideNav;
