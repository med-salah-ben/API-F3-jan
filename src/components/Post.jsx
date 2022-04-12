import React from 'react'
import { Card } from 'react-bootstrap'
const Post = ({post}) => {
  return (
    <div>
        <Card style={{margin:"15px"}}>
  <Card.Header as="h5"> Post ID :{post.id} </Card.Header>
  <Card.Body>
    <Card.Title>  {post.title} </Card.Title>
    <Card.Text>
        {post.body}
    </Card.Text>
  </Card.Body>
</Card>
    </div>
  )
}

export default Post