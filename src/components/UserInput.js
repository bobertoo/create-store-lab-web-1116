import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      hometown: ''
    }

    this.handleUserName = this.handleUserName.bind(this);
    this.handleHometown = this.handleHometown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserName(event){
    this.setState({
      userName: event.target.value
    });
  }

  handleHometown(event){
    this.setState({
      hometown: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.store.dispatch({
      type: 'ADD_USER',
      payload: this.state
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.userName}
          onChange={this.handleUserName} />
        <input
          type='text'
          value={this.state.hometown}
          onChange={this.handleHometown} />
        <button type='submit'>submit</button>
      </form>
    )
  }
}

export default UserInput;
