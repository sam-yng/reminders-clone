import React from "react";
import "../css/index.css";

type BubbleProps = {
  title: string;
  icon?: string;
  counter?: number;
  color?: string;
};

const Bubble = ({ title, icon, counter = 0, color }: BubbleProps) => {
  return (
    <div className="w-[45%] m-3 p-2 rounded-lg border-2 bg-slate-50">
      <div className="flex flex-row justify-between">
        <img className="w-8 h-8" src={icon} />

        <h1 className="text-[22px]">{counter}</h1>
      </div>

      <h1 className="pt-2 text-[18px]">{title}</h1>
    </div>
  );
};

export default Bubble;
