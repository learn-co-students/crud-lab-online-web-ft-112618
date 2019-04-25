import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)

    const renderReviews = associatedReviews.map(review => <Review review={review} key={review.id} deleteReview={this.props.deleteReview}/>)

    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;
