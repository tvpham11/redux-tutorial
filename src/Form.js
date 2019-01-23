import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { addUser } from './models/actions/add-user';

class Form extends Component {

  constructor() {
    super();
    this.state = { userName: '' }
  }

  pushNewUser(event) {
    event.preventDefault();

    const { userName } = this.state;
    const { addUser, users } = this.props;

    const newUser = { name: userName, contacted: false, id: (users.list.length + 1) }
    addUser(newUser);
    this.setState({ userName: '' });
  }

  render() {
    const { userName } = this.state;
    return (
      <div>
        <p>Add a new user!</p>
        <form onSubmit={(event) => this.pushNewUser(event)}>
          <input onChange = {event =>
            this.setState({ userName: event.target.value})} type="text" value={userName}/>
          <button>Add User</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = {
  addUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);