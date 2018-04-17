import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

import * as actions from "../../../actions";

import styles from "./splashform.module.scss";

class SplashForm extends Component {
  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      history,
      addEmail,
      email
    } = this.props;
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
                placeholder="ENTER YOUR E-MAIL"
              />
            </div>
          </div>
          <button
            className="btn"
            type="submit"
            disabled={pristine || submitting}
            onClick={() => addEmail(email.values.email, history)}
          >
            <p>HIT IT!</p>
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

export default connect(mapStateToProps, actions)(withRouter(SplashForm));
