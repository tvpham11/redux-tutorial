import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { addUser } from './models/actions/add-user';

class Form extends Component {

  constructor() {
    super();
    this.state = { 
      name: '',
      id: '',
      contacted: false
    }
  }

  pushNewUser(event, user) {
    event.preventDefault();
    const { addUser } = this.props;
    // const newUser = { name: userName, contacted: false, id: }
    addUser(user);
    this.setState({
      name: '',
      id: '',
      contacted: false
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <p>Add a new user!</p>
        <form onSubmit={(event) => this.pushNewUser(event, user)}>
          <input onChange = {event =>
          this.setState({ user: event.target.value })} 
          type="text" value={user}/>
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