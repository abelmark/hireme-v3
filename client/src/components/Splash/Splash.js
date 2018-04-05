import React, { Component } from "react";
import axios from "axios";

import styles from "./splash.module.scss";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();

    const email = this.state.value;

    console.log('[email]', email)

    axios.post("http://localhost:5000/api/memberlist", { email }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className={styles.Splash}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Get notified when we launch</label>
          <input
            type="email"
            value={this.state.value}
            name="email"
            onChange={this.handleChange}
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Splash;
