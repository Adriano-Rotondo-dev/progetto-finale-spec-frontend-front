import CardList from "./components/CardList";
import GlobalProvider from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <h1 className="text-center">Hello Lorwyn Card Comparator</h1>;
      <CardList />
    </GlobalProvider>
  );
}

export default App;
