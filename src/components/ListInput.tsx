import React from "react";
import plus from '../assets/icons/plus.png';

type ListInputProps = {
  placeholder: string;
  value: string
  handleListAdd: () => void
  handleListChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

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
        className="w-[82%] flex m-auto pl-4 border-2 rounded-md"
      />
      <button type="button" onClick={handleListAdd}>
        <img alt="plus" className="h-6 mr-5" src={plus} />
      </button>
    </div>
)

export default ListInput;
