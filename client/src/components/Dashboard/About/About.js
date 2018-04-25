import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import * as actions from "../../../actions"

import styles from "./about.module.scss";

class About extends Component {
  render() {
    return (
      <section className={styles.about}>
        <ul>
          <li>
            <h3>Professional Experience</h3>
            <p>2-4 years</p>
          </li>
          <li>
            <h3>Contract</h3>
            <p>Full-time</p>
          </li>
          <li>
            <h3>Earliest Start Date</h3>
            <p>04.28.18</p>
          </li>
          <li>
            <h3>US Work Permit</h3>
            <p>Yes</p>
          </li>
          <li>
            <h3>Wants to work in (salary)</h3>
            <ul>
              <li>Los Angeles <span>$85,000</span></li>
              <li>Seattle <span>$85,000</span></li>
              <li>New York <span>$85,000</span></li>
              <li>San Francisco <span>$85,000</span></li>
            </ul>
          </li>
          <li>
            <h3>Languages</h3>
            <p>English<span>(fluent)</span></p>
          </li>
        </ul>
      </section>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     email: state.form.emailList
//   };
// };

// SplashForm = reduxForm({
//   form: "emailList"
// })(SplashForm);

// export default connect(mapStateToProps, actions)(withRouter(SplashForm));

export default About;