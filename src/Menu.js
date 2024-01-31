// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/formulaire">Formulaire</Link>
        </li>
        <li>
          <Link to="/liste">Liste</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
