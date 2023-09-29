import { Link } from 'react-router-dom'

function PostCard({ post }) {
  return (
    <div className='card mb-3'>
      <div className='card-body'>
        <h5 className='card-title'>{post.title}</h5>
        <p className='card-text text-truncate'>{post.body}</p>
        <Link to={`/posts/${post.id}`} className='btn btn-primary'>Details...</Link>
      </div>
    </div>
  )
}

export default PostCard