import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import homepage from './components/homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  
  render() {
    return (
      <div className="main-container">
        <Router>
          <Route exact path='/homepage' component={homepage} />
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