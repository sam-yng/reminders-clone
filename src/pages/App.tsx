import React, { useEffect, useState } from "react";
import "../css/index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "../components/SideNav";
import Main from "../components/Main";

// export const ListContext = React.createContext('')

const App = () => {
  const [page, setPage] = useState<string>('')

  const pullData = (data: string) => {
    setTimeout(() => {
      setPage(data)
    })
  }

  return (
    <main className="h-[100vh] flex flex-row">
      <SideNav func={pullData} />
      {/* <ListContext.Provider value={page} > */}
        <Main />
      {/* </ListContext.Provider> */}
    </main>
  );
}

export default App;
