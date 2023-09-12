import React, { Component } from 'react';

class Submit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      greeting: "welcome",
      timesClicked: 0,
      
    };
  }

  clickHandler() {
    this.setState(prevState => ({
      isLoggedIn:  !prevState.isLoggedIn ,
      greeting: prevState.isLoggedIn ? "welcome" : "bye"
      
    }));
  }

  timesClicked(){
    this.setState((prevState)=>({
      timesClicked: prevState.timesClicked + 1,
      
    }));
  }

  resetTimesClicked(){
    this.setState({
      timesClicked: 0,
    })
      
    
  }

  remove2(){
    this.setState((prevState)=>({
      timesClicked: prevState.timesClicked - 2,
    }));
  }

  add2(){
    this.setState((prevState)=>({
      timesClicked: prevState.timesClicked + 2
    }))
  }

  add5(){
    this.setState((prevState)=>({
      timesClicked: prevState.timesClicked + 5
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={() => this.clickHandler()}>
          {this.state.isLoggedIn ? "Logout" : "Login"}
        </button>
        {/* Conditional rendering based on the isLoggedIn state */}
        {this.state.isLoggedIn ? (
          <div>
            <button onClick={() => this.remove2()}>remove 2</button>
            <button onClick={() => this.add5()}>add 5</button>
            <button onClick={() => this.add2()}>add 2</button>
            <button onClick={() => this.timesClicked()}>clicked {this.state.timesClicked} times</button>
            <button onClick={() => this.resetTimesClicked()}>reset</button>
           
          </div>
        ) : (
          <div>
            {/* Content to display when the user is not logged in */}
            <p>You are not logged in.</p>
          </div>
        )}
      </div>
    );
  }
}

export default Submit;


