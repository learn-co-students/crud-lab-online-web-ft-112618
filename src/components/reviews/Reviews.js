import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, deleteReviews } = this.props;
    const reviewList = reviews.map(reviews => {
      return (
  <Review
          key={review.id}
          review={review}
          deleteReview={deleteReview}
        />
      )
    });
    
    return (
      <ul>
        Reviews
        { reviewList }
      </ul>
    );
  }
};

export default Reviews;