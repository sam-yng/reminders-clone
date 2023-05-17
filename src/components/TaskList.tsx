import React from "react";
import cross from "../assets/icons/close.png";
import whiteCross from "../assets/icons/closeWhite.png";
import { useReminders, List } from "../utils/RemindersContext";

const TaskList = ({ id, name }: List) => {
  const {
    lists,
    setLists,
    setActiveListId,
    selectedList: activeListId,
    theme,
    setTasks,
    tasks,
  } = useReminders();

  const newListView = () => {
    setActiveListId({ listId: id });
  };

  const deleteList = () => {
    setTasks(tasks.filter((task) => task.id === activeListId));
    setLists(lists.filter((list) => list.id !== id));
    setActiveListId(null);
  };

  return (
    <li key={id} className="flex flex-row justify-between">
      <button type="button" onClick={newListView} className="m-2 font-robreg">
        {name}
      </button>

      <button type="button" onClick={deleteList}>
        <img
          alt="cross"
          className="h-3 mr-4"
          src={theme === true ? cross : whiteCross}
        />
      </button>
    </li>
  );
};

export default TaskList;
