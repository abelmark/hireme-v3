import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as reduxForm } from "redux-form";
import emailReducer from "./emailReducer";
// import surveysReducer from "./surveysReducer";
// import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  email: emailReducer
});