import React from 'react'
import { Card,ListGroup ,Button,Spinner } from 'react-bootstrap';

const OneUser = ({user,loadUser}) => {
  return (
    <div>
          {loadUser ? (<>
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
            <Card style={{ width: '18rem',margin:"20px" }}>
    <Card.Header style={{ backgroundColor:"blue",color:"white",textAlign:"center"}}>User Number: {user.id} </Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item> Name : {user.name + " " + user.username } </ListGroup.Item>
      <ListGroup.Item> email : {user.email} </ListGroup.Item>
      <ListGroup.Item> Street : {user.address.street} </ListGroup.Item>
      <ListGroup.Item> City : {user.address.city} </ListGroup.Item>
      <ListGroup.Item> Phone : {user.phone} </ListGroup.Item>
      <ListGroup.Item> Company Name : {user.company.name} </ListGroup.Item>
      <ListGroup.Item> BS : {user.company.bs} </ListGroup.Item>
    </ListGroup>
  </Card>)}
    </div>
  )
}

export default OneUser