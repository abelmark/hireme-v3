import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

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
        <form
          onSubmit={() =>
            actions.submitEmail(this.state.value, this.props.history)
          }
        >
          <label htmlFor="email">FIND JOBS. GET HIRED.</label>
          <input
            type="email"
            value={this.state.value}
            name="email"
            onChange={this.handleChange}
            placeholder="ENTER YOUR E-MAIL"
            required
          />
          <button className="btn" type="submit">
            <p>HIT IT!</p>
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Splash);
