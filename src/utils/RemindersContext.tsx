import React, { useContext, createContext, useState, useEffect } from "react";

export enum ListState {
    Active = 'active',
    Deleted = 'deleted',
}

export type List = {
    id: string;
    name: string;
}

export type Tasks = {
    id?: string
    name: string
    complete: false
}

export type RemindersContextType = {
    lists: List[];
    activeListId: string | null;
    setLists: (lists: List[]) => void;
    setActiveListId: (listId: string | null) => void;

    activePage: string | null
    setActivePage: (listName: string | null) => void

    taskList: Tasks[]
    setTaskList: (taskList: Tasks[]) => void

    taskCount: number | null
    setTaskCount: (taskCount: number | null) => void
}

const RemindersContext = createContext<RemindersContextType | undefined>(undefined);

export const RemindersProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const [lists, setLists] = useState<List[]>([]);
    const [activeListId, setActiveListId] = useState<string | null>(null);
    const [activePage, setActivePage] = useState<string | null>(null)
    const [taskList, setTaskList] = useState<Tasks[]>([])
    const [taskCount, setTaskCount] = useState<number | null>(0)

    useEffect(() => {
        const data = localStorage.getItem('LIST_STATE')
        if (data !== null) setLists(JSON.parse(data))
    }, [])

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem('LIST_STATE', JSON.stringify(lists))
        })
    }, [lists]);

    useEffect(() => {
        setActivePage(null)
    }, ['', lists])

    useEffect(() => {
        setTaskCount(taskList.length - 1)
    }, [taskList.filter])

    return (
        <RemindersContext.Provider
        value={{ lists, activeListId, setLists, setActiveListId, activePage, setActivePage, taskList,
                setTaskList, taskCount, setTaskCount }}>
            {children}
        </RemindersContext.Provider>
    )
}

export const useReminders = (): RemindersContextType => {
    const value = useContext(RemindersContext);
    if (!value) {
        throw new Error('useReminders can only be called from within a RemindersProvider');
    }
    return value;
}