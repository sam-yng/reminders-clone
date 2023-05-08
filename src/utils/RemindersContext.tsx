import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
} from "react";

export enum ListState {
  Active = "active",
  Deleted = "deleted",
}

export type Task = {
  id: string;
  name: string;
  complete?: boolean;
  flagged: boolean;
  date?: string;
  listId: string | null;
};

export type List = {
  id: string;
  name: string;
};

export type RemindersContextType = {
  lists: List[];
  activeListId: string | null;

  tasks: Task[];
  setTasks: (task: Task[]) => void;

  setLists: (lists: List[]) => void;
  setActiveListId: (listId: string) => void;

  theme: boolean;
  setTheme: (theme: boolean) => void;
};

const RemindersContext = createContext<RemindersContextType | undefined>(
  undefined
);

export const RemindersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lists, setLists] = useState<List[]>([]);
  const [activeListId, setActiveListId] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState<boolean>(true);

  useEffect(() => {
    const data = localStorage.getItem("LISTS");
    if (data !== null) setLists(JSON.parse(data));
    const taskData = localStorage.getItem("TASKS");
    if (taskData !== null) setTasks(JSON.parse(taskData));
    const themeData = localStorage.getItem("THEME");
    if (themeData !== null) setTheme(JSON.parse(themeData));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("LISTS", JSON.stringify(lists));
    });
  }, [lists]);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("TASKS", JSON.stringify(tasks));
    });
  }, [tasks]);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("THEME", JSON.stringify(theme));
    });
  }, [theme]);

  const value = useMemo(
    () => ({
      lists,
      activeListId,
      setLists,
      setActiveListId,
      tasks,
      setTasks,
      theme,
      setTheme,
    }),
    [activeListId, lists, tasks, theme]
  );

  return (
    <RemindersContext.Provider value={value}>
      {children}
    </RemindersContext.Provider>
  );
};

export const useReminders = (): RemindersContextType => {
  const value = useContext(RemindersContext);
  if (!value) {
    throw new Error(
      "useReminders can only be called from within a RemindersProvider"
    );
  }
  return value;
};
