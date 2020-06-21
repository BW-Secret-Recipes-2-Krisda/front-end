import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { login } from "../login";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./Login.css";

class Start extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  logIn = e => {
    e.preventDefault();
    this.props.logIn(this.state.credentials, this.props.history);
    this.setState({
      credentials: {
        username: "",
        password: ""
      }
    });
  };

  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }

  return (
    <div className="login-page-wrapper">
    <div className="login-form-wrapper">
      {this.props.loggingIn ? (
        <h2>Loading</h2>
      ) : (
        <>
          <div className="Login">
            <form onSubmit={this.login}>
              <FormGroup controlId="username" bsSize="large">
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  autoFocus
                  required
                  type="username"
                  name="username"
                  value={this.input}
                  onChange={this.handleChanges}
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  value={this.input}
                  required
                  onChange={this.handleChanges}
                  name="password"
                  type="password"
                />
              </FormGroup>
              <Button block bsSize="large" type="submit">
                Login
              </Button>
            </form>
          </div>
          
          </>
          )}
        </div>
      </div>
    );
  }
}

const StateToProp = state => ({
  loggingIn: state.loggingIn,
  success: state.success
});
export default withRouter(
  connect(
    StateToProp,
    { login }
  )(Start)
);