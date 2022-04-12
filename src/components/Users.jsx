import React from 'react';
import { Spinner,Button } from 'react-bootstrap';
import UserCard from './UserCard';

const Users = ({users,loadUsers}) => {
    console.log(users)
  return (
    <div style={{display:"flex" , flexWrap:"wrap"}} >
        {loadUsers ? (<>
  <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    <span className="visually-hidden">Loading...</span>
  </Button>{' '}
  <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
</>):(
    users.map((el)=><UserCard key={el.id} user={el} />)
)}
    </div>
  )
}

export default Users