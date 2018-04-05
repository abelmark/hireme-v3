import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index'

import Header from './Header/Header'
import Dashboard from './Dashboard/Dashboard'

import styles from './App.module.css';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser(); 
  }

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.container}>
          <Header />
          <Dashboard />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('[state]', state)
  return {
    user: state.auth
  };
}

export default connect(mapStateToProps, { fetchUser })(App);
