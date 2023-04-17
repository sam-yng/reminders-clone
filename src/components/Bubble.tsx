import React from 'react';
import '../css/index.css';
import { useReminders } from '../utils/RemindersContext';

type BubbleProps = {
  title: string;
  icon: string;
  counter: number | null;
  id: string;
}

const Bubble = ({
  title, icon, counter = 0, id
}: BubbleProps) => {
  const { setActiveListId } = useReminders();

  return (
    <button
      type="button"
      onClick={() => setActiveListId(id)}
      className="border-2 bg-slate-100 border-slate-100 m-3 p-2 rounded-lg"
    >
      <div className="flex flex-row justify-between">
        <img
          className="h-8"
          alt="icon"
          src={icon}
        />
        <h1 className="text-[22px]">{counter}</h1>
      </div>
      <h1 className="pt-2 text-left text-[18px]">{title}</h1>
    </button>
  );
};

export default Bubble;
