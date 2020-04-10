import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import Dashboard from './components/dashboard';
import Login from './components/login'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      countryCode:'ae'
    }
  }
  render() {
    return (
      <div className="App">
        {this.props.userLoggedIn?
        <Dashboard></Dashboard>
        :
        <Login></Login>
        }
      </div>
    );
  }
}

const mapStateToProps = state=>{
  return {
    userLoggedIn: state.user.loggedIn
  }
}

export default connect(mapStateToProps, ()=>({}))(App);
