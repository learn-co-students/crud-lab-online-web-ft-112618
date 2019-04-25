import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  reviews: [],
  restaurants: []
}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      let restaurant = {
        id: cuid(),
        text: action.text
      }
      return {...state, restaurants: state.restaurants.concat(restaurant)}

    case 'DELETE_RESTAURANT':
      return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

    case 'ADD_REVIEW':
      let review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      }
      return {...state, reviews: state.reviews.concat(review)}

    case 'DELETE_REVIEW':
        return {...state, reviews: state.reviews.filter(review => review.id !== action.review.id)}

    default:
      return state;
  }
}
