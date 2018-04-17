import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import SplashForm from './SplashForm/SplashForm';

import styles from "./splash.module.scss";
import businessman from "../../assets/images/businessman.png";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className={styles.Splash}>
        <h1>GET NOTIFIED WHEN WE LAUNCH</h1>
        <div className={styles.Splash__image}>
          <img src={businessman} alt="Business Man" />
        </div>
        <SplashForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.email
  };
}

export default connect(mapStateToProps)(withRouter(Splash));
