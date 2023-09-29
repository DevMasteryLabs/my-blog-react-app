import PostCard from '../components/PostCard';

function Posts(props) {
  const { postsList } = props
  
  return (
    <div className='container mt-2'>
      <h3 className='text-center'>Posts</h3>
      {
        postsList.map(post => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))
      }
    </div>
  );
}

export default Posts;