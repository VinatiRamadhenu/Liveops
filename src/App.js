import React, { Component } from 'react';
import '../src/App.css'; // 
import Playerinfo from '../src/Playerinfo.js'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: [
        {
          offer_id: 'OFF-1',
          offer_title: 'Special Discount',
          offer_description: 'Get 50% off!',
          target: 'age >= 30 and installed_days >= 5',
        },
        {
          offer_id: 'OFF-2',
          offer_title: 'New Player Bonus',
          offer_description: 'Extra gems for new players!',
          target: 'installed_days < 5',
        },
      ],
    };
  }

  render() {
    const { offers } = this.state;

    return (
      <div className="App">
        <h1>Game Offers</h1>

        <Playerinfo offers={offers} />

        <h2>Filtered Offers:</h2>
        <ul>
          {offers.map((offer) => (
            <li key={offer.offer_id}>
              {offer.offer_title} - {offer.offer_description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;