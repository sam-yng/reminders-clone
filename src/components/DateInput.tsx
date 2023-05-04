import React, { useState } from "react";
import calendar from "../assets/icons/calendar-two.png";
import { useReminders } from "../utils/RemindersContext";

type DateInputProps = {
  inputDate: string;
  placeholder: string;
  handleUpdate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDate: (date: { code: string }) => void;
};

const DateInput = ({
  inputDate,
  placeholder,
  handleDate,
  handleUpdate,
}: DateInputProps) => {
  return (
    <div className="ml-auto mr-6 w-36 flex p-2 border-2 border-slate-100 rounded-lg items-cente bg-slate-100">
      <img alt="icon" className="h-4 pl-2" src={calendar} />
      <input
        name="date"
        className="bg-slate-100 w-[70%] ml-2 text-center text-[13px] focus:outline-none"
        type="text"
        placeholder={placeholder}
        onKeyDown={handleDate}
        value={inputDate}
        onChange={handleUpdate}
      />
    </div>
  );
};

export default DateInput;
