import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from "../../actions/index";
import Aux from '../../hoc/Aux';

import styles from './header.module.scss';


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/github">Login</a>
            <a href="/auth/linkedin">Login 2</a>
          </li>
        );
      default:
        return (
          <Aux>
            <li key="1" style={{ margin: "0 10px" }}>
              User: {this.props.auth.name}
            </li>
            <li key="2">
              <a href="/api/logout">Logout</a>
            </li>
          </Aux>
        )
    }
  }

  render() {
    return <nav className={styles.navbar}>
        <div>Hire.me</div>
        <div>
          <ul>{this.renderContent()}</ul>
        </div>
      </nav>;
  }
}

function mapStateToProps({ auth }){
  console.log('[auth]', auth)
  return { auth };
}

export default connect(mapStateToProps)(Header)