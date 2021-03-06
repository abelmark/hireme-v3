import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import emailReducer from "./emailReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  email: emailReducer
});
