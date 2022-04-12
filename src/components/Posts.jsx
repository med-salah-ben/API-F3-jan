import React from 'react';
import { Spinner,Button } from 'react-bootstrap';
import Post from './Post';

const Posts = ({posts,loadPosts}) => {
  return (
    <div>
                    {loadPosts ? (<>
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
    posts.map((el)=><Post key={el.id} post={el} />)
)}
    </div>
  )
}

export default Posts