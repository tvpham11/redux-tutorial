import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { UserList } from './components/UserList';
import { toggleUser } from './models/actions/toggle-user';

class List extends Component {

  constructor() {
    super();
    this.state = { 
      contacted: false
    }
  }

  clickedUser(event, userName) {
    event.preventDefault();
    const { toggleUser } = this.props;
    toggleUser(userName);
    this.setState({
      contacted: true
    });
    // event.style = {
    //   textDecoration: userName.contacted ? 'line-through' : 'none'
    // }
  }

  // userList() {
  //   const { users } = this.props;
  //   const { userId } = this.state;
  //   return users.names.map((name) => 
  //     <li key={name.id}
  //       onClick={(event) => this.clickedUser(event, userId)}>
  //     {name}</li>
  //   )
  // }

  // when change userReducer function in user-reducer to take state = [] (instead of state = initial),
  // users.names.map doesn't work - need to figure out how to change state to be an array of objects,
  // instead of array of strings to save contacted state of each name
  // userList() {
  //   const { users } = this.props;
  //   return users.names.map((name, i) => 
  //     <li key={i} onClick={(event) => this.clickedUser(event, users.key)}>{name}</li>
  //   )
  // }
  
  userList() {
    const { users } = this.props;
    return users.names.map((name, i) => 
      <li key={i}>{name}</li>
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

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = {
  toggleUser
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
// export default List;