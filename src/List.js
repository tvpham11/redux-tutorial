import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class List extends Component {

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