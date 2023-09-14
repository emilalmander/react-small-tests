import React, { Component } from 'react';
import Loader from './Loader';
import Post from './Post';

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoaded: false,
        posts: []
      }
    }
    componentDidMount() {
        
        setTimeout(() => {
          
          this.setState({
            posts: savedPosts,
            isLoaded: true,
          });
        }, 2000);
      }

  render() {
    return (
        <div>
          {this.state.isLoaded ? (
          <div>
            <Post/>
          </div>
        ) : 
        <div>
          <Loader/>
        </div>}
        </div>
      );
    }
}

export default Content