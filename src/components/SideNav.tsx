import React from 'react';
import { useReminders } from '../utils/RemindersContext';
import ListView from './ListView';
import Main from './Main';
import Input from './Input';
import TaskList from './TaskList';
import calendartwo from '../assets/icons/calendar-two.png';
import calendar from '../assets/icons/calendar.png';
import boxes from '../assets/icons/boxes.png';
import flag from '../assets/icons/red-flag.png';

const SideNav = () => {
  const { activeListId, lists } = useReminders();

  if (activeListId !== null) {
    return (
      <>
        <nav className="md:hidden">
          <Main />
        </nav>
        <nav className="md:w-[25%] m-4 md:m-0 h-[100%] md:border-r-2 border-gray-400 pt-6">
          <Input placeholder="Search" />
          <ul className="grid grid-cols-2">
            <ListView icon={calendartwo} count={0} name="Today" id="Today" />
            <ListView icon={calendar} count={0} name="Scheduled" id="Scheduled" />
            <ListView icon={boxes} count={0} name="All" id="All" />
            <ListView icon={flag} count={0} name="Flagged" id="Flagged" />
          </ul>
          <Input placeholder="Add List" />
          <h1 className="text-gray-500 ml-[18px] mt-5">My Lists</h1>
          <ul className="ml-4 mt-2 mr-2">
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
        <ListView icon={calendartwo} count={0} name="Today" id="Today" />
        <ListView icon={calendar} count={0} name="Scheduled" id="Scheduled" />
        <ListView icon={boxes} count={0} name="All" id="All" />
        <ListView icon={flag} count={0} name="Flagged" id="Flagged" />
      </ul>
      <Input placeholder="Add List" />
      <h1 className="text-gray-500 ml-[18px] mt-5">My Lists</h1>
      <ul className="ml-4 mt-2 mr-2">
        {lists.map(list => (
          <TaskList key={list.id} id={list.id} name={list.name} tasks={list.tasks} />
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
