import React from 'react';

const OfferList = ({ offers }) => (
  <div>
    <h1>Game Offers</h1>
    <ul>
      {offers.map((offer) => (
        <li key={offer.offer_id}>{offer.offer_title}</li>
      ))}
    </ul>
  </div>
);

export default OfferList;