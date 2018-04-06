import React, { Component } from "react";
import axios from "axios";

import styles from "./splash.module.scss";
import businessman from "../../assets/images/businessman.png";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const email = this.state.value;

    axios.post("http://localhost:5000/api/memberlist", { email }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className={styles.Splash}>
        <h1>GET NOTIFIED WHEN WE LAUNCH</h1>
        <div className={styles.Splash__image}>
          <img src={businessman} />
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">FIND JOBS. GET HIRED.</label>
          <input
            type="email"
            value={this.state.value}
            name="email"
            onChange={this.handleChange}
            placeholder="ENTER YOUR E-MAIL"
            required
          />
          <button className="btn" type="submit">HIT IT!</button>
        </form>
      </div>
    );
  }
}

export default Splash;
