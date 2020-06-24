import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import homepage from './components/homepage';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

class App extends React.Component {
  
  render() {
    return (
      <div className="main-container">
        <Router>
          <PrivateRoute exact path='/homepage' component={homepage} />
        </Router>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  users: state.users,
  recipes: state.recipes,
  token:state.token
});

export default connect(
  mapStateToProps,
  {}
)(App);