import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function CreatePost({ onAddPost }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPost = {
      id: Math.floor(Math.random() * 10000),
      title,
      body
    }

    onAddPost(newPost)
    navigate('/posts')
  }

  return (
    <div className='container mt-2'>
      <h3 className='text-center'>Create a new post</h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='post-title' className='form-label'>Post title</label>
          <input
            className='form-control'
            id='post-title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='post-body' className='form-label'>Post body</label>
          <textarea
            className='form-control'
            id='post-body'
            rows='8'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <Button type='submit' variant='primary'>Submit</Button>
      </form>
    </div>
  );
}

export default CreatePost;