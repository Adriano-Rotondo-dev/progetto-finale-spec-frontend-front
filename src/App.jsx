import { Outlet } from "react-router-dom";
import GlobalProvider from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <h1 className="text-center">Hello Lorwyn Card Comparator</h1>;
      <Outlet />
    </GlobalProvider>
  );
}

export default App;
