import React from 'react';
import '../css/index.css';
import Lists from './Lists';
import { useReminders } from '../utils/RemindersContext';
import BubbleLists from './BubbleLists';
import Main from './Main';

const SideNav = () => {
  const { activeListId } = useReminders();

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
          <BubbleLists />
          <Lists />
        </nav>
      </>
    );
  }

  return (
    <nav className="md:w-[25%] m-4 md:m-0 h-[100%] md:border-r-2 border-gray-400 pt-6">
      <input
        type="text"
        placeholder="Search"
        className="w-[94%] mb-4 md:mb-0 flex m-auto pl-4 border-2 rounded-md"
      />
      <BubbleLists />
      <Lists />
    </nav>
  );
};

export default SideNav;
