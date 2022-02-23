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

function App() {
  const [{stockData, setStockData}, {modifiedArray, setModifiedArray}] = useData()
  const [bag, setBag, [showBag, setShowBag]] = useBag()
  
  return (
    <BrowserRouter>
    <Nav getBag={{bag, setBag, showBag, setShowBag}} />

    <Routes>
     
    <Route path={PATH.HOME} element={<Home data={{stockData, setStockData, modifiedArray, setModifiedArray}} />}  />
    <Route path={PATH.WOMEN} element={<Women  />}/>
    <Route path={PATH.MEN} element={<Men />} />
    <Route path={DYNAMICPATHS.ITEM_PATH} element={<Item />} />

    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
