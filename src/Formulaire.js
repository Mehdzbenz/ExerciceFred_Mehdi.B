// Formulaire.js
import React, { useState, useEffect } from 'react';

function Formulaire() {
  const [nom, setNom] = useState('');
  const [storedNom, setStoredNom] = useState('');

  useEffect(() => {
    const storedCat = localStorage.getItem("StockPrénom");
    if (storedCat) {
      setStoredNom(storedCat);
    }
  }, []); // Utilisation de useEffect pour récupérer les données au chargement du composant

  const handleChange = (event) => {
    setNom(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Le nom a été soumis : ' + nom);
    localStorage.setItem("StockPrénom", nom);
    setStoredNom(nom);
    setNom(''); // Réinitialiser le champ après soumission
  };

  return (
    <div>
      {storedNom && <p>Nom stocké : {storedNom}</p>}
      <h1>Formulaire</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input type="text" value={nom} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Formulaire;
