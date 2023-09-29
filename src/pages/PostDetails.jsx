import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
              <button type='submit' className='btn btn-danger mx-auto d-block'>Delete</button>
            </>
          )
          : <p className='text-danger'>Post not found</p>
      }
    </div>
  )
}

export default PostDetails