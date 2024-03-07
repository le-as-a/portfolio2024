import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/skills" />
          <Route exact path="/projects" />
          <Route exact path="/games" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
