import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function PostDetails(props) {
  const { postsList } = props
  const [post, setPost] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const foundPost = postsList.find(post => post.id === Number(id))
    if (foundPost) {
      setPost(foundPost)
    }
  }, [])

  return (
    <div className='container mt-2'>
      {
        post
          ? (
            <>
              <h4 className='text-center'>{post.title}</h4>
              <p>{post.body}</p>
              <Button type='submit' variant='danger' className='mx-auto d-block'>Delete</Button>
            </>
          )
          : <p className='text-danger'>Post not found</p>
      }
    </div>
  )
}

export default PostDetails