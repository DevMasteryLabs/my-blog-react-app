import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

function PostCard({ post }) {
  return (
    <Card className='mb-3'>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text className='text-truncate'>{post.body}</Card.Text>
        <Link to={`/posts/${post.id}`} className='btn btn-primary'>Details...</Link>
        {/* OR */}
        {/* <Button as={Link} variant='primary' to={`/posts/${post.id}`}>Details...</Button> */}
      </Card.Body>
    </Card>
  )
}

export default PostCard