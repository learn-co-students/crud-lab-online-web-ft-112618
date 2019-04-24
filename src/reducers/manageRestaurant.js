
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      let restaurant = { id: cuid(), text: action.payload }
      return { restaurants: state.restaurants.concat(restaurant) }
    case "DELETE_RESTAURANT":
      return { restaurants: state.restaurants.filter(res => res.id !== action.payload) }
    default:
      return state;
  }
}
