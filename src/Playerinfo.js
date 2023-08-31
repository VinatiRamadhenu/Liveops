import React, { Component } from 'react';

class PlayerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "player_id": "Max",
      "age": '35',
      "installedDays": '10',
      "coins": 10000, 
      "gems": 2, 
      "game_level": 10, 
      "purchaser": false
    
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSearch = () => {
    const { age, installedDays } = this.state;

    const { offers } = this.props;

    const filteredOffers = offers.filter((offer) => {
      // Parse player info
      const playerAge = parseInt(age);
      const playerInstalledDays = parseInt(installedDays);

      return (
        (!playerAge || offer.target.includes(`age >= ${playerAge}`)) &&
        (!playerInstalledDays || offer.target.includes(`installed_days >= ${playerInstalledDays}`))
      );
    });

    console.log('Filtered Offers:', filteredOffers);
  };

  render() {
    return (
      <div>
        <h2>Player Information</h2>
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={this.state.age}
          onChange={this.handleInputChange}
        />
        <input
          type="number"
          name="installedDays"
          placeholder="Installed Days"
          value={this.state.installedDays}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSearch}>Search Offers</button>
      </div>
    );
  }
}

export default PlayerInfo;
