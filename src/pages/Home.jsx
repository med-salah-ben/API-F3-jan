import React from 'react'
import Users from '../components/Users'

const Home = ({users,loadUsers}) => {
  return (
    <div>
        <Users users={users} loadUsers={loadUsers} />
    </div>
  )
}

export default Home