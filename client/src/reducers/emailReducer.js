import { ADD_EMAIL } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_EMAIL:
      console.log("ADDING E-MAIL", action.payload);
      return action.payload || false;
    default:
      console.log("hit default for some reason");
      return state;
  }
}
