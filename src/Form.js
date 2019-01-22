import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { addUser } from './models/actions/add-user';

class Form extends Component {

  constructor() {
    super();
    this.state = { 
      userName: ''
    }
  }

  pushNewUser(event, userName) {
    event.preventDefault();
    const { addUser } = this.props;
    addUser(userName);
    this.setState({
      userName: ''
    });
  }

  render() {
    const { userName } = this.state;
    return (
      <div>
        <p>Add a new user!</p>
        <form onSubmit={(event) => this.pushNewUser(event, userName)}>
          <input onChange = {event =>
          this.setState({ userName: event.target.value })} 
          type="text" value={userName}/>
          <button>Add User</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addUser
}

export default connect(null, mapDispatchToProps)(Form);
