import React, { useEffect, useRef, useState } from "react";
import '../css/index.css'
import SideNav from "./SideNav";
import Lists from "./Lists";
import { useReminders } from "../utils/RemindersContext";
import check from '../assets/icons/checkmark.png'
import { v4 as uuidv4 } from 'uuid'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const Main: React.FC = () => {
    const { lists, activePage, setLists, taskList, setTaskList, taskCount, setTaskCount } = useReminders();
    const [name, setInput] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const handleAdd = () => {
        const newList = taskList.concat({
            id: uuidv4(),
            name,
            complete: false,
        })
        setTaskList(newList)
        setInput('')
    }

    useEffect(() => {
        setTaskCount(taskList.length - 1)
    }, [taskList.filter])

    useEffect(() => {
        setTaskCount(taskList.length)
    }, [handleAdd])

    return(
        <main className="w-[65%] ml-16 mt-8">
            <article className="flex flex-row">
                <h1 className="text-[40px] font-robmedium">{activePage}</h1>
                {activePage !== null  && (
                    <>
                        {activePage !== 'Scheduled' && (
                            <h1 className="text-[35px] ml-auto">{taskCount}</h1>
                        )}
                    </>
                )}
            </article>
            {activePage !== null && (
                <>
                    { activePage !== 'Scheduled' && (
                        <div>
                            <div className="flex flex-row mt-8">
                                <input value={name} onChange={handleChange} type="text" className="pl-2 w-[50%] border-2 rounded-md border-blue-300" autoFocus></input>
                                <button onClick={handleAdd} className="ml-4">
                                    <img className="h-8" src={check} />
                                </button>
                            </div>
                            <ul>
                                {taskList.map((item) => (
                                    <div className="ml-6 mt-6">
                                        <li
                                            onClick={() => setTaskList(taskList.filter(taskList => taskList.id !== item.id))}
                                            className="cursor-pointer hover:line-through"
                                            key={item.id}>{item.name}
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            )}
            {activePage === 'Scheduled' && (
                <Calendar className="mt-10 ml-8 p-6" />
            )}
        </main>
    )
}

export default Main