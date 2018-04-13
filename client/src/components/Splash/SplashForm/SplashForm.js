import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import * as actions from "../../../actions";

import styles from "./splashform.module.scss";

class SplashForm extends Component {
  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      history,
      addEmail
    } = this.props;

    let email = 'abelmarka@gmail.com'
    return (
      <div className={styles.Splash}>
        <form onSubmit={() => addEmail(email, history)}>
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
          >
            HIT IT!
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.form.emailList
  };
};


SplashForm = reduxForm({
  form: "emailList"
})(SplashForm);

export default connect(mapStateToProps, actions)(SplashForm);