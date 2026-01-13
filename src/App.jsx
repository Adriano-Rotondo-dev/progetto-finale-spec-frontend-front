import { Outlet } from "react-router-dom";
import GlobalProvider from "./context/GlobalContext";
import Navbar from "./components/NavBar";

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <h1 className="text-center p-2">Hello Lorwyn Card Comparator</h1>;
      <Outlet />
    </GlobalProvider>
  );
}

export default App;
