import { Outlet } from "react-router-dom";
import GlobalProvider from "./context/GlobalContext";
import Navbar from "./components/NavBar";

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <Outlet />
    </GlobalProvider>
  );
}

export default App;
