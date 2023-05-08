import React from "react";

type DateInputProps = {
  inputDate: string;
  placeholder: string;
  icon: string;
  handleUpdate: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDate: (date: { code: string }) => void;
};

const DateInput = ({
  inputDate,
  placeholder,
  icon,
  handleDate,
  handleUpdate,
}: DateInputProps) => {
  return (
    <div className="ml-auto mr-6 w-36 flex p-2 border-2 border-slate-100 rounded-lg items-cente bg-slate-100">
      <img alt="icon" className="h-4 pl-2" src={icon} />
      <input
        name="date"
        className="bg-slate-100 text-black w-[70%] ml-2 text-center text-[13px] focus:outline-none"
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
