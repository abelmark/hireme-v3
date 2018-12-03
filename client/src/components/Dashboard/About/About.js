import React, { Component } from "react";
import Field from '../Field/Field';
// import { connect } from "react-redux";
// import { Field, reduxForm } from "redux-form";

// import * as actions from "../../../actions"

import styles from "./about.module.scss";

class About extends Component {
  render() {
    return (
      <section className={styles.about}>
        <ul>
          <li>
            <h3>Professional Experience</h3>
            <Field 
              value='1 to 2 years'
            />
          </li>
          <li>
            <h3>Contract</h3>
            <Field
              value="Full-time"
            />
          </li>
          <li>
            <h3>Earliest Start Date</h3>
            <Field 
              value="Dec. 31st 2018"
            />
          </li>
          <li>
            <h3>US Work Permit</h3>
            <Field 
              value="Yes"
            />
          </li>
          <li>
            <h3>Wants to work in (salary)</h3>
            <ul>
              <Field 
                value={['New York', 'Los Angeles', 'Seattle']}
              />
            </ul>
          </li>
          <li>
            <h3>Languages</h3>
            <Field 
              value="English (fluent)"
            />
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