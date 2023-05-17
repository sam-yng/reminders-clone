import React from "react";
import SideNav from "../components/SideNav";
import Main from "../components/Main";
import { RemindersProvider, useReminders } from "../utils/RemindersContext";

const App = () => {
  const { theme } = useReminders();

  return (
    <div className={theme ? "light" : "dark"}>
      <main className="md:flex h-[100vh] md:flex-row">
        <SideNav />
        <Main />
      </main>
    </div>
  );
};

const WrappedApp = () => (
  <RemindersProvider>
    <App />
  </RemindersProvider>
);

export default WrappedApp;
