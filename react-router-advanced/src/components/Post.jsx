import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams(); // Get the dynamic `id` from the URL
  return (
    <div>
      <h2>Post {id}</h2>
      <p>This is the content of Post {id}</p>
    </div>
  );
};

export default Post;