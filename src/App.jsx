import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <main className="bg-orange-200 h-screen">
        <Contact />
      </main>
    </>
  );
};

export default App;
