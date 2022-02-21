import React, {useState, useEffect} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {PATH} from './misc/CONSTANTS';
import Home from './pages/Home.js';
import Nav from './Nav.js'
import useData from "./misc/useData";

function App() {
  const [{stockData, setStockData}, {modifiedArray, setModifiedArray}] = useData()

  return (
    <BrowserRouter>
    <Nav />

    <Routes>
     
    <Route path={PATH.HOME} element={<Home data={{stockData, setStockData, modifiedArray, setModifiedArray}} />}  />



    </Routes>
    </BrowserRouter>
  );
}

export default App;
