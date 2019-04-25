import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRestaurants = () => this.props.restaurants.map(res => <Restaurant key={res.id} restaurant={res} deleteRestaurant={this.props.deleteRestaurant}/>)
  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;
