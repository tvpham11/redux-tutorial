import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// import User from './components/User';
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

  // userList() {
  //   const { users } = this.props;
  //   const { userId } = this.state;
  //   return users.names.map((name) => 
  //     <li key={name.id}
  //       onClick={(event) => this.clickedUser(event, userId)}>
  //     {name}</li>
  //   )
  // }



  userList() {
    const { users } = this.props;
    // return Object.keys(users).map((user, i) =>
    console.log(users);
    return users.list.map((user) => 
      <li key={user.id} onClick={(event)=> this.clickedUser(event, user)}>{ user.name }</li>
      /* onClick={this.clickedUser.bind(this, i)}> */
    )
  }

  // user = ({ onClick, contacted, name }) => (
  //   <li
  //     onClick={onClick}
  //     style={{
  //       textDecoration: contacted ? 'line-through' : 'none'
  //     }}
  //   >
  //     { name }
  //   </li>
  // )

  // userList = ({ users, toggleUser }) => (
  //   <ul>
  //     {users.map(user => (
  //       <User key={user.id} {...user} onClick={() => toggleUser(user.id)} />
  //     ))}
  //   </ul>
  // )

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