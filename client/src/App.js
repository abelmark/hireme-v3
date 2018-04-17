import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { fetchUser } from './actions/index'

import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Splash from './components/Splash/Splash'
import Loader from './components/Loader/Loader'
import ThankYou from './components/ThankYou/ThankYou'

import history from "./history/history";
import styles from './App.module.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    this.props.fetchUser();
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000)
  }

  render() {
    // if(this.state.loading){
    //   return (
    //     <Loader />
    //   )
    // }

    return (
      <Router history={history} forceRefresh={true}>
        <div className={styles.App}>
          <div className={styles.container}>
            <Route exact path="/" component={Splash} />
            <Route path="/thankyou" component={ThankYou} />
          </div>
        </div>
      </Router>
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
