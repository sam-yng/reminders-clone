import React from "react";
import "../css/index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "../components/SideNav";

function App() {
  return (
    <main className="h-[100vh] ">
      <SideNav />
      
    </main>
  );
}

export default App;
