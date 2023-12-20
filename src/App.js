import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import CharacterList from "./Component/characters/Characters";
import Home from "./Component/home/Home";
import MainBar from "./Component/home/MainBar";
import CharacterDetails from "./Component/people/People";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <MainBar />
        <div className="screen-container">
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/character" element={<CharacterList />} />
              <Route path="/characters/:name" component={<CharacterDetails/>} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
