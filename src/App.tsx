import "./App.css";
import MainPage from "./MainPage";
import Nav from "./nav";

function App() {
  return (
    <>
      <Nav />

      <div className="h-screen flex items-center justify-center">
        <MainPage />
      </div>
    </>
  );
}

export default App;
