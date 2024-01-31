// Liste.js
import React from 'react';

// Un composant pour représenter une carte
function Card({ imageUrl, text }) {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card Image" />
      <p>{text}</p>
    </div>
  );
}

function Liste() {
  const items = [
    { imageUrl: 'https://static.vecteezy.com/ti/photos-gratuite/p2/23187656-magnifique-cheval-portrait-avec-feu-flammes-sur-une-noir-contexte-numerique-peinture-gratuit-photo.jpg', text: 'Cheval maléfique' },
    { imageUrl: 'https://static.vecteezy.com/ti/photos-gratuite/p2/23574577-magnifique-cheval-portrait-sur-une-fonce-contexte-portrait-de-une-cheval-ai-generatif-image-gratuit-photo.jpg', text: 'Cheval prestigieux' },
    { imageUrl: 'https://img.pikbest.com/origin/09/34/27/97VpIkbEsTbnm.jpg!w700wp', text: 'Cheval en feu' },
  ];

  return (
    <div>
      <h1>Liste d'éléments en cartes</h1>
      <div className="card-list">
        {items.map((item, index) => (
          <Card key={index} imageUrl={item.imageUrl} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default Liste;
