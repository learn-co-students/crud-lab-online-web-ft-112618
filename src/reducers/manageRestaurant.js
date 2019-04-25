
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: []}, action) {
  let restaurant;
  let review;
  switch (action.type) {
    case "ADD_RESTAURANT":
      restaurant = { id: cuid(), text: action.payload }
      return { ...state, restaurants: state.restaurants.concat(restaurant) }
    case "DELETE_RESTAURANT":
      return { ...state, restaurants: state.restaurants.filter(res => res.id !== action.payload) }
    case "ADD_REVIEW":
      review = { ...action.review, id: cuid() }
      return { ...state, reviews: state.reviews.concat(review) }
    case "DELETE_REVIEW":
      return { ...state, reviews: state.reviews.filter(rev => rev.id !== action.payload)}
    default:
      return state;
  }
}
