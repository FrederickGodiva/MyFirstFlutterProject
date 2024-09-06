import "./App.css";
import MainPage from "./MainPage";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Nav />

      <div className="flex items-center justify-center h-screen">
        <MainPage />
      </div>
    </>
  );
}

export default App;
