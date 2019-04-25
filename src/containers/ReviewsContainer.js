import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import addReview from '../actions/addReview'
import deleteReview from '../actions/deleteReview'

class ReviewsContainer extends Component {


  render() {
    const filteredReviews = this.props.reviews.filter(rev => (rev.restaurantId === this.props.restaurant.id))

    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={filteredReviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({ reviews: state.reviews })

export default connect(mapStateToProps, { addReview, deleteReview })(ReviewsContainer);
