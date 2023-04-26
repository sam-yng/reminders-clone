import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import plus from '../assets/icons/plus.png';
import { useReminders } from '../utils/RemindersContext';

type InputProps = {
  placeholder: string;
}

const Input = ({ placeholder }: InputProps) => {
  const {
    lists,
    setLists,
    activeListId,
    name,
    allList,
    setName,
    input,
    setInput,
    activeList,
  } = useReminders();

  const handleListChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleListAdd = () => {
    lists.splice(0, 0, { id: uuidv4(), name, tasks: [] });
    setLists(lists);
    setName('');
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleTaskAdd = (e: { code: string }) => {
    if (!activeList || !allList) {
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
      allList.tasks.splice(newTaskList.length, 0, newTaskList[newTaskList.length - 1])
      setInput('');
    }
  };

  return (
    <>
      { placeholder === 'Add List' && (
        <div className="mt-5 flex flex-row">
          <input
            type="text"
            value={name}
            placeholder={placeholder}
            onChange={handleListChange}
            className="w-[82%] flex m-auto pl-4 border-2 rounded-md"
          />
          <button type="button" onClick={handleListAdd}>
            <img alt="plus" className="h-6 mr-5" src={plus} />
          </button>
        </div>
      )}
      { placeholder === 'Search' && (
        <input
          type="text"
          placeholder={placeholder}
          className="mb-4 w-[94%] md:mb-0 flex m-auto pl-4 border-2 rounded-md"
        />
      )}
      { placeholder === '' && (
        <div className="flex flex-row md:mt-8">
          <input
            onKeyDown={handleTaskAdd}
            value={input}
            placeholder={placeholder}
            onChange={handleTaskChange}
            type="text"
            className="md:pl-2 mb-2 md:w-[50%] w-full border-2 rounded-md border-blue-300"
          />
        </div>
      )}
    </>
  );
};

export default Input;
