import React, { Component } from 'react';

class OfferForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offerTitle: '',
      offerDescription: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { offerTitle, offerDescription } = this.state;
  };

  render() {
    return (
      <div>
        <h2>Create/Edit Offer</h2>
        <input
          type="text"
          name="offerTitle"
          placeholder="Offer Title"
          value={this.state.offerTitle}
          onChange={this.handleInputChange}
        />
        <textarea
          name="offerDescription"
          placeholder="Offer Description"
          value={this.state.offerDescription}
          onChange={this.handleInputChange}
        ></textarea>
        <button onClick={this.handleSubmit}>Save Offer</button>
      </div>
    );
  }
}

export default OfferForm;