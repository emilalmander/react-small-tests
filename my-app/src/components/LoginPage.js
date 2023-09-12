import React, { Component } from 'react'

export class LoginPage extends Component {
  render() {
    return (
        <div>
        <form>
          <div>
            <label>username:</label>
            <input  type="username"
          id="username"
          name="username"
          required
          >
            </input>
          </div>
          <div>
          <label>password:</label>
            <input  type="password"
          id="password"
          name="password"
          required
          >
            </input>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default LoginPage