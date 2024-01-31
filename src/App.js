// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Formulaire from './Formulaire';
import Liste from './Liste';
import Menu from './Menu';
import './App.css'; // Import du fichier CSS

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <div className="container">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/formulaire" element={<Formulaire />} />
            <Route path="/liste" element={<Liste />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
