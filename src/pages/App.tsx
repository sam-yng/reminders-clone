import React, { useState } from "react";
import "../css/index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "../components/SideNav";
import Main from "../components/Main";

const App = () => {
  const [activePage, setActivePage] = useState('')

  return (
    <main>
      <Main />
    </main>
  );
}

export default App;
