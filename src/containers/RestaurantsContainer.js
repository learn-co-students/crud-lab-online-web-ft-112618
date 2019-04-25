import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'
import addRestaurant from '../actions/addRestaurant'
import deleteRestaurant from '../actions/deleteRestaurant'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({ restaurants: state.restaurants })

export default connect(mapStateToProps, { addRestaurant, deleteRestaurant })(RestaurantsContainer)
