import "../css/index.css";
import SideNav from "../components/SideNav";
import Main from "../components/Main";
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
