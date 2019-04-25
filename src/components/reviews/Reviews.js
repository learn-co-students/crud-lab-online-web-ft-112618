import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  mapReviews = () => this.props.reviews.map(rev => <Review key={rev.id} review={rev} deleteReview={this.props.deleteReview}/>)

  render() {
    return (
      <ul>
        {this.mapReviews()}
      </ul>
    );
  }
};

export default Reviews;
