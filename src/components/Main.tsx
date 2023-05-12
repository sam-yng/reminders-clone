import React, { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import { useReminders } from "../utils/RemindersContext";
import "react-calendar/dist/Calendar.css";
import arrow from "../assets/icons/right-arrow.png";
import TaskItem from "./TaskItem";
import TaskInput from "./Inputs/TaskInput";

const Main = () => {
  const { setActiveListId, setTasks, tasks, activeListId, lists, theme } =
    useReminders();
  const [input, setInput] = useState<string>("");

  const tasksByList = useMemo(() => {
    switch (activeListId) {
      case "today":
        return tasks
          .filter((task) => task.date === format(new Date(), "dd/MM/yyyy"))
          .map((item) => (
            <TaskItem
              key={item.id}
              id={item.id}
              name={item.name}
              flagged={item.flagged}
              listId={activeListId}
            />
          ));
      case "scheduled":
        return tasks
          .filter((task) => task.date)
          .map((item) => (
            <TaskItem
              key={item.id}
              id={item.id}
              name={item.name}
              flagged={item.flagged}
              listId={activeListId}
            />
          ));
      case "flagged":
        return tasks
          .filter((task) => task.flagged === true)
          .map((item) => (
            <TaskItem
              key={item.id}
              id={item.id}
              name={item.name}
              flagged={item.flagged}
              listId={activeListId}
            />
          ));
      case "all":
        return tasks.map((item) => (
          <TaskItem
            key={item.id}
            id={item.id}
            name={item.name}
            flagged={item.flagged}
            listId={activeListId}
          />
        ));
      default:
        return tasks
          .filter((task) => task.listId === activeListId)
          .map((item) => (
            <TaskItem
              key={item.id}
              id={item.id}
              name={item.name}
              flagged={item.flagged}
              listId={activeListId}
            />
          ));
    }
  }, [activeListId, tasks]);

  const listName = useMemo(() => {
    switch (activeListId) {
      case "today":
        return "Today";
      case "scheduled":
        return "Scheduled";
      case "flagged":
        return "Flagged";
      case "all":
        return "All";
      default:
        return lists.find((list) => list.id === activeListId)?.name;
    }
  }, [activeListId, lists]);

  const inputStatus = useMemo(() => {
    switch (activeListId) {
      case "today":
        return true;
      case "scheduled":
        return true;
      case "flagged":
        return true;
      case "all":
        return true;
      default:
        return false;
    }
  }, [activeListId]);

  const handleBack = (e: { code: string }) => {
    if (e.code === "Escape") {
      setActiveListId("");
    }
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleTaskAdd = (e: { code: string }) => {
    if (e.code === "Enter") {
      tasks.splice(0, 0, {
        id: uuidv4(),
        name: input,
        flagged: false,
        listId: activeListId || null,
      });
      setTasks(tasks.filter((task) => task.id));
      setInput("");
    }
  };

  if (!activeListId) {
    return (
      <div
        className={`w-[75%] pl-16 pt-8 md:visible ${theme ? "light" : "dark"}`}
      />
    );
  }

  return (
    <div className={`w-[75%] ${theme ? "light" : "dark"}`}>
      <main className={`m-auto md:ml-16 md:mt-8 ${theme ? "light" : "dark"}`}>
        <button
          type="button"
          onClick={() => setActiveListId("")}
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
            {listName}
          </h1>
          <h1 className="md:text-[40px] text-[20px] ml-auto mr-16">
            {tasksByList.length}
          </h1>
        </article>
        <TaskInput
          placeholder=""
          taskName={input}
          onTaskAdd={handleTaskAdd}
          onTaskChange={handleTaskChange}
          disabled={inputStatus}
        />
        <div>
          <ul>{tasksByList}</ul>
        </div>
      </main>
    </div>
  );
};

export default Main;
