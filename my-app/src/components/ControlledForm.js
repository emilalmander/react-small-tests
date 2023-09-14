import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "",
        comment: "",
        category: "",
        
      }
    }

    handleNameChange = (event) => {
        this.setState ({
            name: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState ({
            comment: event.target.value
        })
    }

    handleCategoryChoice = (event) => {
        event.preventDefault();
        
    }

    handleSubmit = (event) => {
        this.setState ({
            category: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            id="id-name"
                            name="name"
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query category:</label>
                        <select
                            id="id-category"
                            name="category"
                            onChange={this.handleCategoryChoice}
                            value={this.state.category}
                            
                        >
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea
                            id="id-comments"
                            name="comments"
                            onChange={this.handleCommentsChange}
                            value={this.state.comment}
                            
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm