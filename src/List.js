import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { store } from './App.js'
// import { toggleUser } from './models/actions/toggle-user';
import './App.css';

class List extends Component {

  // constructor() {
  //   super();
  //   this.state = { 
  //     id: ''
  //   }
  // }

  // clickedUser(event, userId) {
  //   event.preventDefault();
  //   const { toggleUser } = this.props;
  //   toggleUser(userId);
  //   this.setState({
  //     id: ''
  //   });
  //   event.style = {
  //     textDecoration: userId.contacted ? 'line-through' : 'none'
  //   }
  // }

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

export default connect(mapStateToProps)(List);
// export default List;