import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/index";
import { SocialIcon } from "react-social-icons";

import styles from "./dashboard.module.scss";
import icons from "glyphicons";

class Dashboard extends Component {
  renderIcons() {
    const urls = [
      "http://www.markaabel.com",
      "http://www.github.com/abelmark",
      "http://www.linkedin.com/in/markabelseattle"
    ];

    return _.map(urls, url => {
      console.log(url);
      return (
        <SocialIcon
          className={styles.social_icon}
          color="black"
          style={{ height: 25, width: 25 }}
          url={url}
        />
      );
    });
  }

  renderDashboard() {
    if (!this.props.user) {
      return (
        <section className={styles.Dashboard}>
          <div>You ain't logged in</div>
        </section>
      )
    } else {
      return (
        <section className={styles.Dashboard}>
          <div className={styles.User}>
            <div className={styles.User__left}>
              <figure>
                <img src={this.props.user.avatar_url} />
              </figure>
            </div>
            <div className={styles.User__right}>
              <h3>{this.props.user.name}</h3>
              <h5 className={styles.lightgray}>{this.props.user.bio}</h5>
              <h5>{this.props.user.location}</h5>
              <div>{this.renderIcons()}</div>
            </div>
          </div>
          <div className={styles.Work}>
            <div className={styles.About}>
              <h3>About</h3>
            </div>
            <div className={styles.Experience}>
              <h3> Ideal roles & Experience</h3>
            </div>
          </div>
        </section>
      );
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
