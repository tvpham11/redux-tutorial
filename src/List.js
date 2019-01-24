import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { toggleUser } from './models/actions/toggle-user';

class List extends Component {

  clickedUser(event, user) {
    event.preventDefault();
    const { toggleUser } = this.props;
    console.log('clicked ID: ' + user.id);
    toggleUser(user.id);
    event.style = {
      textDecoration: event.contacted ? 'line-through' : 'none'
    }
  }

  userList() {
    const { users } = this.props;
    console.log(users);
    return users.list.map((user) => 
      <li key={user.id} onClick={(event)=> this.clickedUser(event, user)}>{ user.name }</li>
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