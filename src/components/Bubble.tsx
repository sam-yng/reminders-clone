import React from "react";
import "../css/index.css";
import { useReminders } from "../utils/RemindersContext";

type BubbleProps = {
  title: string;
  icon?: string;
  counter?: number | null;
  color?: string;
};

const Bubble = ({ title, icon, counter = 0, color }: BubbleProps) => {
  const { taskCount, setActivePage } = useReminders()

  return (
    <button onClick={() => setActivePage(title)} className="w-[45%] text-left m-3 p-2 rounded-lg border-2 bg-slate-50">
      <div className="flex flex-row justify-between">
        <img className="w-8 h-8" src={icon} />

        <h1 className="text-[22px]">{counter}</h1>
      </div>

      <h1 className="pt-2 text-[18px]">{title}</h1>
    </button>
  );
};

export default Bubble;
