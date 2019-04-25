import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} restaurant={this.props.restaurant} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}


const mapStateToProps = ({reviews}) => ({reviews})

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({type: "ADD_REVIEW", review }),
  deleteReview: review => dispatch({type: "DELETE_REVIEW", review})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
