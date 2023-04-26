import React from 'react';
import SideNav from '../components/SideNav';
import Main from '../components/Main';
import { RemindersProvider } from '../utils/RemindersContext';

const App = () => (
  <RemindersProvider>
    <main className="hidden md:flex h-[100vh] md:flex-row">
      <SideNav />
      <Main />
    </main>
    <main className="md:hidden h-[100vh]">
      <SideNav />
    </main>
  </RemindersProvider>
);

export default App;
