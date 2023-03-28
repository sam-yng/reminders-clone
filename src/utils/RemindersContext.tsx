import React, { useContext, createContext, useState } from "react";

export enum ListState {
    Active = 'active',
    Deleted = 'deleted',
}

export type List = {
    id: string;
    name: string;
}

export type RemindersContextType = {
    lists: List[];

    activeListId: string | null;

    setLists: (lists: List[]) => void;
    setActiveListId: (listId: string | null) => void;
}

const RemindersContext = createContext<RemindersContextType | undefined>(
    undefined
);

export const RemindersProvider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const [lists, setLists] = useState<List[]>([]);
    const [activeListId, setActiveListId] = useState<string | null>(null);

    return (
        <RemindersContext.Provider value={{ lists, activeListId, setLists, setActiveListId }}>
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