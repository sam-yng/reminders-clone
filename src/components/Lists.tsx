import React, { useState } from 'react';
import '../css/index.css';
import { v4 as uuidv4 } from 'uuid';
import plus from '../assets/icons/plus.png';
import cross from '../assets/icons/close.png';
import { useReminders } from '../utils/RemindersContext';

const Lists = () => {
  const {
    lists, setLists, setActiveListId
  } = useReminders();
  const [name, setInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleAdd = () => {
    lists.splice(0, 0, { id: uuidv4(), name, tasks: [] });
    setLists(lists);
    setInput('');
  };

  return (
    <>
      <div className="mt-5 flex flex-row">
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Add List"
          className="w-[82%] flex m-auto pl-4 border-2 rounded-md"
        />
        <button type="button" onClick={handleAdd}>
          <img alt="plus" className="h-6 mr-5" src={plus} />
        </button>
      </div>
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
