import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Panel from "./components/Panel/Panel";
import People from "./components/People/People";
import Login from "./components/Login/Login";
import { auth } from "./firebase";

const App = () => {
  const [user, setUser] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {!user && <Login />}
        {user && (
          <div className="main">
            <Menu />
            <div className="container">
              <Routes>
                <Route path="/" element={<Panel />} />
                <Route path="/people" element={<People />} />
              </Routes>
            </div>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
