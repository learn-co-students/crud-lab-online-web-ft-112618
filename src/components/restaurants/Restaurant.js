import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import { connect } from 'react-redux'
import deleteRestaurant from '../../actions/deleteRestaurant'

class Restaurant extends Component {

  handleDelete = event => {
    event.preventDefault();
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;


    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleDelete}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default connect(null, { deleteRestaurant })(Restaurant);
