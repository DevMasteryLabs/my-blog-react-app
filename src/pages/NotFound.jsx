import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/')
    }, 3000);

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className='container mt-2'>
      <p className='text-danger'>404 - This page could not be found.</p>
    </div>
  );
}

export default NotFound;