import React, { useEffect, useState } from "react";
import "../css/index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "../components/SideNav";
import Main from "../components/Main";
import { v4 as uuidv4 } from 'uuid'
import { RemindersProvider } from "../utils/RemindersContext";

const App = () => {

  return (
    <RemindersProvider>
      <main className="h-[100vh] flex flex-row">
        <SideNav />
        <Main />
      </main>
    </RemindersProvider>
  );
}

export default App;
