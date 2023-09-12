import React, { Component } from 'react';
import LoginPage from './LoginPage';
import Logout from './Logout';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  clickHandler() {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  }

  render() {
    return (
      <header>
        <h1>GALLERY</h1>
      <div>
        <button onClick={() => this.clickHandler()}> 
          {this.state.isLoggedIn ? "logout" : "login"}
        </button>
        {this.state.isLoggedIn ? (
          <div>
            <LoginPage/>
          </div>
        ) : 
        <div>
          <Logout/>
        </div>}
      </div>
      </header>
    );
  }
}

export default Login;
