import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Sell from "./components/Header/Sell";
import Buy from "./components/Header/Buy";
import Favorite from "./components/Header/Favorite";
import Data from "./components/Main/Data";

import "./App.css";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/" element={<Navigate to="/data" />} />
          <Route
            path="/data"
            element={<Data favorites={favorites} setFavorites={setFavorites} />}
          />
          <Route
            path="/Favorite"
            element={<Favorite favorites={favorites} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
