import React from 'react';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';
// import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/'>

      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
    </div>
  );
}

export default App;