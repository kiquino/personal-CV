
import React from 'react';
import Homepage from './pages/homepage';
import Projects from './pages/projects';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/styles.css';

function App() {
  return (
    
   

     
  <Router>
      <Routes>
       <Route path="/"  element={<Homepage />} />
        <Route path="/projects/:id" element={<Projects />} />
       
    </Routes>
    </Router>
  
  );
}

export default App;
