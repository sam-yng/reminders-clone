import React from 'react';
import '../css/index.css';
import { useReminders } from '../utils/RemindersContext';
import ListView from './ListView';
import Main from './Main';
import Input from './Input';
import TaskList from './TaskList';

const SideNav = () => {
  const { activeListId, lists } = useReminders();

  const SpecialLists = lists.filter(list => list.id.length < 12)

  if (activeListId !== null) {
    return (
      <>
        <nav className="md:hidden">
          <Main />
        </nav>
        <nav className="md:w-[25%] m-4 md:m-0 h-[100%] md:border-r-2 border-gray-400 pt-6">
          <Input placeholder="Search" />
          <ul className="grid grid-cols-2">
            {SpecialLists.map(list => (
              <ListView key={list.id} name={list.name} icon={list.id} count={list.tasks.length} />
            ))}
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
        {SpecialLists.map(list => (
          <ListView key={list.id} name={list.name} icon={list.id} count={list.tasks.length} />
        ))}
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
