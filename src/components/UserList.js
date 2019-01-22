import React from 'react'
import PropTypes from 'prop-types'
import User from './User'

const UserList = ({ users, toggleUser }) => (
  <ul>
    {users.map(user => (
      <User key={user.id} {...user} onClick={() => toggleUser(user.id)} />
    ))}
  </ul>
)

UserList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default UserList