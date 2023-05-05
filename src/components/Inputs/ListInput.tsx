import React from "react";

type ListInputProps = {
  placeholder: string;
  value: string;
  handleListAdd: (e: { code: string }) => void;
  handleListChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ListInput = ({
  placeholder,
  value,
  handleListAdd,
  handleListChange,
}: ListInputProps) => (
  <div className="mt-5 flex flex-row">
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleListChange}
      onKeyDown={handleListAdd}
      className="w-[95%] flex m-auto pl-4 border-2 rounded-md"
    />
  </div>
);

export default ListInput;
