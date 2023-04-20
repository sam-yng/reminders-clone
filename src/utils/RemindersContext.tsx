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
  input: string;
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

  setLists: (lists: List[]) => void;
  setActiveListId: (listId: string | null) => void;

  name: string;
  setName: (name: string) => void
  input: string;
  setInput: (input: string) => void
  activeList: List | undefined

  allList: List | undefined
};

const RemindersContext = createContext<RemindersContextType | undefined>(
  undefined
);

export const RemindersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lists, setLists] = useState<List[]>([
    { id: 'Today', name: 'Today', tasks: [] },
    { id: 'Scheduled', name: 'Scheduled', tasks: [] },
    { id: 'All', name: 'All', tasks: [] },
    { id: 'Flagged', name: 'Flagged', tasks: [] },
  ]);
  const [activeListId, setActiveListId] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [input, setInput] = useState<string>('');

  const activeList = useMemo(
    () => lists.find(list => list.id === activeListId),
    [lists, activeListId]
  );

  const allList = useMemo(
    () => lists.find(list => list.id === "All"),
    [lists]
  )

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
    name,
    setName,
    input,
    setInput,
    activeList,
    allList,
  }), [activeList, activeListId, allList, input, lists, name]);

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
