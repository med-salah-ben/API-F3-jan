import React from 'react';
import { Card,ListGroup ,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserCard = ({user}) => {
  return (
    <Card style={{ width: '18rem',margin:"20px" }}>
    <Card.Header style={{ backgroundColor:"blue",color:"white",textAlign:"center"}}>User Number: {user.id} </Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item> {user.name + " " + user.username } </ListGroup.Item>
      <ListGroup.Item> {user.email} </ListGroup.Item>
      <ListGroup.Item> {user.address.street} </ListGroup.Item>
      <ListGroup.Item> {user.phone} </ListGroup.Item>
      <ListGroup.Item> {user.company.name} </ListGroup.Item>
      <Link to={`/user/${user.id}`} ><Button variant='primary'> User Profile </Button></Link>
    </ListGroup>
  </Card>
  )
}

export default UserCard