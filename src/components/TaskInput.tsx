import React from "react";

type TaskInputProps = {
  placeholder: string
  value: string
  handleTaskAdd: (e: {code: string;}) => void
  handleTaskChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TaskInput = ({
  placeholder,
  value,
  handleTaskAdd,
  handleTaskChange
}: TaskInputProps) => (
    <div className="flex flex-row md:mt-8">
    <input
      onKeyDown={handleTaskAdd}
      value={value}
      placeholder={placeholder}
      onChange={handleTaskChange}
      type="text"
      className="md:pl-2 mb-2 md:w-[50%] w-full border-2 rounded-md border-blue-300"
    />
  </div>
)

export default TaskInput;
