import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/index";
import Aux from "../../hoc/Aux";

import styles from "./header.module.scss";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <ul>
            <li>
              <a href="/auth/github">Login</a>
            </li>
            {/* <li>
              <a href="/auth/linkedin">Login 2</a>
            </li> */}
          </ul>
        );
      default:
        return (
          <Aux>
            <ul>
              <li key="1" style={{ margin: "0 10px" }}>
                User: {this.props.auth.name}
              </li>
              <li key="2">
                <a href="/api/logout">Logout</a>
              </li>
            </ul>
          </Aux>
        );
    }
  }

  render() {
    return (
      <nav className={styles.navbar}>
        <div>Hire.me</div>
        <div>
          <ul>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  console.log("[auth]", auth);
  return { auth };
}

export default connect(mapStateToProps)(Header);
