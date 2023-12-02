import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Prices from "./components/Prices/Prices";
import Location from "./components/Location/Location";
import Recensioni from "./components/Recensioni/Recensioni";
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/tariffario" element={<Prices></Prices>}></Route>
          <Route path="/location" element={<Location></Location>}></Route>
          <Route path="/recensioni" element={<Recensioni></Recensioni>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
