import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="Restaurant">Restaurant Name </label>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
