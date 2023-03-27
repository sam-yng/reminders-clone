import React, { useEffect } from "react";
import { useState } from "react";
import "../css/index.css";
import plus from '../assets/icons/plus.png'
import arrow from '../assets/icons/right-arrow.png'
import { v4 as uuidv4 } from 'uuid'
import { useReducer } from "react";

const initialList: Array<{id: string, name: string}> = [
  { id: uuidv4(), name: "Reminders" }
]

const Lists = ({ listsToNav }: any) => {
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
      <ul className="ml-[16px] mt-2 mr-[16px]">
        {listData.isShowList && listData.list.map((item) => (
          <div className="flex flex-row justify-between">
          <button onClick={() => listsToNav(item.name)}>
            <li className="m-2 font-robreg" key={item.id}>{item.name}</li>
          </button>
          {/* <button onClick={handleButton}>
            <img className="h-5" src={arrow} />
          </button> */}
          </div>
        ))}
      </ul>
    </>
  );
};

export default Lists;
