import React from "react";
import { Field, reduxForm } from "redux-form";

import * as actions from "../../../actions";

import styles from "./splashform.module.scss";

const SplashForm = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    history,
    submitEmail,
    emailList,
    form
  } = props;
  return (
    <div className={styles.Splash}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>FIND JOBS. GET HIRED</label>
          <div>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Enter Your E-mail"
            />
          </div>
        </div>
        <button
          className="btn"
          type="submit"
          disabled={pristine || submitting}
          onClick={() => submitEmail(form.emailList, history)}
        >
          HIT IT!
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "emailList"
})(SplashForm);
