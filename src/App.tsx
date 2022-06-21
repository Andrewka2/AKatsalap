import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { MyCollection } from './Pages/Main';
import { Routes, Route } from "react-router-dom"
import { ItemPages } from './Pages/ItemPages';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MyCollection/>} />
        <Route path="/item/:id" element={<ItemPages/>} />
      </Routes>
    </div>
  );
}

export default App;