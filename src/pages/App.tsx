import React, { useEffect, useState } from "react";
import "../css/index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "../components/SideNav";
import Main from "../components/Main";
import { v4 as uuidv4 } from 'uuid'

// export const ListContext = React.createContext('')
const initialList: Array<{id: string, name: string}> = [
  { id: uuidv4(), name: "Reminders" }
]

const App = () => {
  const [listData, setListData] = useState({
    list: initialList,
    isShowList: true,
  })

  return (
    <main className="h-[100vh] flex flex-row">
      <SideNav listData={listData} setListData={setListData} />
      {/* <ListContext.Provider value={page} > */}
      <Main listData={listData} setListData={setListData} />
      {/* </ListContext.Provider> */}
    </main>
  );
}

export default App;
