import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      restaurantId: this.props.restaurant.id
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addReview(this.state)
    this.setState({
      ...this.state,
      text: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="Review">Write Review </label>
          <input type="text" name="Review" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
