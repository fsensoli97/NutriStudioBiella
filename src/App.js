import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          {/*<Route path="/about" element={<Location></Location>}></Route>
          <Route path="/tariffario" element={<Schedule></Schedule>}></Route>
          <Route path="/location" element={<Contacts></Contacts>}></Route>
          <Route path="/recensioni" element={<Settings setDarkMode={setDarkMode}></Settings>}></Route>*/}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
