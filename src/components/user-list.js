import React from 'react'
import PropTypes from 'prop-types'
import User from './user'

const userList = ({ users, toggleUser }) => (
  <ul>
    {users.map(user => (
      <User key={user.id} {...user} onClick={() => toggleUser(user.id)} />
    ))}
  </ul>
)

userList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleUser: PropTypes.func.isRequired
}

export default userList