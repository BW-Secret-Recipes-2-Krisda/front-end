import React from "react";
import { login } from "../actions";
import { connect } from "react-redux";
import MarketingPage from './MarketingPage.png';
import "./Login.css";


class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();

    this.props.login(this.state.credentials);
    //this.props.history.push('/homepage');
  };

  render() {
    return (
      <div>
        <img style={{ width: '75%', height: '25vh', 'border-radius': '5px',
    border: '1px outset white' }} src={MarketingPage} alt='SFR' />
        <h1> Login </h1><h1 id="FG"> Login </h1>
        <form onSubmit={this.handleLogin} className='Login'>
          <input
            onChange={this.handleChange}
            name='username'
            type='text'
            placeholder='Username'
            value={this.state.credentials.username}
          />
          <input
            onChange={this.handleChange}
            name='password'
            type='password'
            placeholder='Password'
            value={this.state.credentials.password}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);