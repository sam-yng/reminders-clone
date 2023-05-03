import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { useReminders } from '../utils/RemindersContext';
import ListView from './ListView';
import ListInput from './ListInput'
import TaskList from './TaskList';
import calendartwo from '../assets/icons/calendar-two.png';
import calendar from '../assets/icons/calendar.png';
import boxes from '../assets/icons/boxes.png';
import flag from '../assets/icons/red-flag.png';
import SearchInput from './SearchInput';

const SideNav = () => {
  const {
    setActiveListId,
    lists,
    setLists,
  } = useReminders();

  const [name, setName] = useState<string>('')

  const handleListAdd = () => {
    lists.splice(0, 0, { id: uuidv4(), name });
    setLists(lists);
    setName('');
    setActiveListId(lists[0].id)
  };

  const handleListChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <nav className="md:w-[25%] m-4 md:m-0 h-[100%] md:border-r-2 border-gray-400 pt-6">
      <SearchInput placeholder="Search" />
      <ul className="grid grid-cols-2">
        <ListView
          id="Today"
          setActiveListId={setActiveListId}
          icon={calendartwo}
          count={0}
          name="Today" />
        <ListView
          id="Scheduled"
          setActiveListId={setActiveListId}
          icon={calendar}
          count={0}
          name="Scheduled" />
        <ListView
          id="All"
          setActiveListId={setActiveListId}
          icon={boxes}
          count={0}
          name="All" />
        <ListView
          id="Flagged"
          setActiveListId={setActiveListId}
          icon={flag}
          count={0}
          name="Flagged" />
      </ul>
      <ListInput
        placeholder='Add List'
        value={name}
        handleListAdd={handleListAdd}
        handleListChange={handleListChange}
      />
      <h1 className="text-gray-500 ml-[18px] mt-5">My Lists</h1>
      <ul className="ml-4 mt-2 mr-2">
        {lists.map(list => (
          <TaskList key={list.id} id={list.id} name={list.name} />
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
