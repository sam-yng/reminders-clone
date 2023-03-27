import React, { useEffect } from "react";
import { useState } from "react";
import "../css/index.css";
import plus from '../assets/icons/plus.png'
import { v4 as uuidv4 } from 'uuid'
import { useReducer } from "react";

const initialList: Array<{id: string, name: string}> = [
  { id: uuidv4(), name: "Reminders" }
]

const Lists = () => {
  const [listData, setListData] = useState({
    list: initialList,
    isShowList: true
  })
  const [name, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem('LIST_STATE', JSON.stringify(listData));
  }, [listData]);

  useEffect(() => {
    const data = localStorage.getItem('LIST_STATE')
    if (data !== null) setListData(JSON.parse(data))
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleAdd = () => {
    const newList = listData.list.concat({
      id: uuidv4(),
      name
    })
    setListData({ ...listData, list: newList })
    setInput('')
  }

  return (
    <>
      <div className="mt-5 flex flex-row">
        <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Add List"
        className="w-[82%] flex m-auto pl-4 border-2 rounded-md"
        />
        <button type="button" onClick={handleAdd}>
          <img className="h-6 mr-5" src={plus} />
        </button>
      </div>
      <h1 className="text-gray-500 ml-[18px] mt-5">My Lists</h1>
      <ul className="ml-[16px] mt-2">
        {listData.isShowList && listData.list.map((item) => (
          <li className="m-2" key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Lists;
