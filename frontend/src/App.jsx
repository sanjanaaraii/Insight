import React from 'react'
import Navbar from './components/navbar'
import './App.css'
import Homepage from './pages/homepage'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        
      </Routes>
    </>
  );
}
export default App
