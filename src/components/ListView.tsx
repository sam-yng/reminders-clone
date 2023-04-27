import React from 'react';
import { useReminders } from '../utils/RemindersContext'

type ListViewProps = {
  icon: string
  count: number
  name: string
}

const ListView: React.FC<ListViewProps> = ({ icon, count, name }) => {
  const { setActiveListId } = useReminders()

  return (
    <button
      type="button"
      className="border-2 bg-slate-100 border-slate-100 m-3 p-2 rounded-lg"
      onClick={() => setActiveListId(null)}
    >
      <div className="flex flex-row justify-between">
        <img
          className="h-8"
          alt="icon"
          src={icon}
        />
        <h1 className="text-[22px]">{count}</h1>
      </div>
      <h1 className="pt-2 text-left text-[18px]">{name}</h1>
    </button>
  )
};

export default ListView;
