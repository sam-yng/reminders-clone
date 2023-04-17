import React from 'react';
import '../css/index.css';
import cross from '../assets/icons/close.png';
import { useReminders } from '../utils/RemindersContext';

const Lists = () => {
  const {
    lists, setLists, setActiveListId
  } = useReminders();

  return (
    <>
      <h1 className="text-gray-500 ml-[18px] mt-5">My Lists</h1>
      <ul className="ml-[16px] mt-2 mr-[16px]">
        {lists.map((item) => (
          <div key={item.id} className="flex flex-row justify-between">
            <button type="button" onClick={() => setActiveListId(item.id)}>
              <li id="name" className="m-2 font-robreg">
                {item.name}
              </li>
            </button>
            <button
              type="button"
              onClick={() =>
                setLists(lists.filter((list) => list.id !== item.id))}
            >
              <img alt="cross" className="h-3" src={cross} />
            </button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Lists;
