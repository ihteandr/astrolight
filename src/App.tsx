import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NatalCard from './pages/NatalCard/NatalCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/natal-card" Component={NatalCard}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
