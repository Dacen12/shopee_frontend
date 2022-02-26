import React, {useState, useEffect} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {PATH, DYNAMICPATHS} from './misc/CONSTANTS';
import Home from './pages/Home.js';
import Nav from './Nav.js'
import useData from "./misc/useData";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Item from "./pages/Item";
import useBag from "./components/useBag";
import Bag from "./pages/Bag";
function App() {
  const [{stockData, setStockData}, {modifiedArray, setModifiedArray}] = useData()
  const bagOptions = useBag()
  
  return (
    <BrowserRouter>
    <Nav useBag={bagOptions} />
    <Routes>
      <Route path={PATH.HOME} element={<Home data={{stockData, setStockData, modifiedArray, setModifiedArray}} />}  />
      <Route path={PATH.WOMEN} element={<Women  />}/>
      <Route path={PATH.MEN} element={<Men />} />
      <Route path={DYNAMICPATHS.ITEM_PATH} element={<Item useBag={bagOptions} />} />
      <Route path={PATH.BAG} element={<Bag useBag={bagOptions} />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
