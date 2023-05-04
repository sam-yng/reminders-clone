import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useReminders } from "../utils/RemindersContext";
import "react-calendar/dist/Calendar.css";
import arrow from "../assets/icons/right-arrow.png";
import Task from "./Task";
import TaskInput from "./TaskInput";

const Main = () => {
  const { setActiveListId, setLists, lists, activeListId } = useReminders();

  const [input, setInput] = useState<string | null>(null);

  const handleBack = (e: { code: string }) => {
    if (e.code === "Escape") {
      setActiveListId(null);
    }
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleTaskAdd = (e: { code: string }) => {
    if (e.code === "Enter") {
      setInput("");
    }
  };

  return (
    <main className="md:w-[65%] w-[80%] m-auto md:ml-16 md:mt-8">
      <button
        type="button"
        onClick={() => setActiveListId(null)}
        onKeyDown={handleBack}
      >
        <img
          alt="arrow"
          src={arrow}
          className="md:hidden block h-6 rotate-180 mt-4"
        />
      </button>
      <article className="flex flex-row mt-4">
        <h1 className="md:text-[40px] text-[25px] font-robmedium mb-4">
          {activeList.name}
        </h1>
        <h1 className="md:text-[40px] text-[20px] ml-auto">
          {activeList.tasks.length}
        </h1>
      </article>
      <TaskInput
        placeholder=""
        taskName={input}
        onTaskAdd={handleTaskAdd}
        onTaskChange={handleTaskChange}
      />
      <div>
        <ul>
          {activeList.tasks.map((item) => (
            <Task
              key={item.id}
              id={item.id}
              input={item.input}
              flagged={item.flagged}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Main;
