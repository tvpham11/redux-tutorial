import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { toggleUser } from './models/actions/toggle-user';

class List extends Component {

  constructor() {
    super();
    this.state = { contacted: false }
  }

  clickedUser(event, user) {
    event.preventDefault();
    const { toggleUser } = this.props;

    this.setState({ contacted: !this.state.contacted })
    toggleUser(user.id);
  }

  userList() {
    const { users } = this.props;
    console.log(users);
    return users.list.map((user) => 
      <li key={user.id} onClick={(event)=> this.clickedUser(event, user)}
      style={ {textDecoration: user.contacted ? 'line-through' : 'none'}}>
        { user.name }
      </li>
    )
  }

  render() {
    return (
      <div>
        <p>Here are our users!</p>
        <hr />
        <ul>
          { this.userList() }
        </ul>
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
  toggleUser
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
// export default List;