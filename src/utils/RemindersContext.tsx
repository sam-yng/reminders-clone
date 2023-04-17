import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

export enum ListState {
  Active = 'active',
  Deleted = 'deleted',
}

export type Tasks = {
  id: string;
  name: string;
  complete?: boolean;
  flagged: boolean;
  date?: string;
};

export type List = {
  id: string;
  name: string;
  tasks: Array<Tasks>;
};

export type RemindersContextType = {
  lists: List[];
  activeListId: string | null;

  bubbleLists: List[];
  setBubbleLists: (lists: List[]) => void;

  setLists: (lists: List[]) => void;
  setActiveListId: (listId: string | null) => void;
};

const RemindersContext = createContext<RemindersContextType | undefined>(
  undefined
);

export const RemindersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lists, setLists] = useState<List[]>([]);
  const [activeListId, setActiveListId] = useState<string | null>(null);
  const [bubbleLists, setBubbleLists] = useState<List[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('LIST_STATE');
    if (data !== null) setLists(JSON.parse(data));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('LIST_STATE', JSON.stringify(lists));
    });
  }, [lists]);

  const value = useMemo(() => ({
    lists,
    activeListId,
    setLists,
    setActiveListId,
    bubbleLists,
    setBubbleLists,
  }), [activeListId, bubbleLists, lists]);

  return (
    <RemindersContext.Provider
      value={value}
    >
      {children}
    </RemindersContext.Provider>
  );
};

export const useReminders = (): RemindersContextType => {
  const value = useContext(RemindersContext);
  if (!value) {
    throw new Error(
      'useReminders can only be called from within a RemindersProvider'
    );
  }
  return value;
};
