// import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/index";

import Splash from '../Splash/Splash'
import About from './About/About';

import styles from "./dashboard.module.scss";

class Dashboard extends Component {

  renderDashboard() {
    if (!this.props.user) {
      return (
        <section>
          <Splash />
        </section>
      )
    } else {
      return <section className={styles.Dashboard}>
          <div className={styles.User}>
            <div className={styles.User__left}>
              <figure>
                <img src={this.props.user.avatar_url} alt="Profile Avatar" />
              </figure>
            </div>
            <div className={styles.User__right}>
              <h3>{this.props.user.name}</h3>
              <h5 className={styles.lightgray}>{this.props.user.bio}</h5>
              <h5>{this.props.user.location}</h5>
              {/* <div>{this.renderIcons()}</div> */}
            </div>
          </div>
          <div className={styles.Work}>
            <div className={styles.About}>
              <About />
            </div>
            <div className={styles.Experience}>
              <h3> Ideal roles & Experience</h3>
            </div>
          </div>
        </section>;
    }
  }

  render() {
    return <div>{this.renderDashboard()}</div>;
  }
}

function mapStateToProps(state) {
  console.log("[state]", state);
  return {
    user: state.auth
  };
}

export default connect(mapStateToProps)(Dashboard);
