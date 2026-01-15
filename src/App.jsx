import { Outlet } from "react-router-dom";
import GlobalProvider from "./context/GlobalContext";
import Navbar from "./components/NavBar";
import FavoritesSidebar from "./components/FavoritesSidebar";

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <FavoritesSidebar />

      <Outlet />
    </GlobalProvider>
  );
}

export default App;
