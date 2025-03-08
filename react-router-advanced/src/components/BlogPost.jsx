import React from 'react';
import { useParams } from 'react-router-dom'; // useParams will fetch the dynamic id

const BlogPost = () => {
  const { id } = useParams(); // Get the dynamic id parameter from the URL

  return (
    <div>
      <h2>Blog Post {id}</h2>
      {/* Simulating a blog post for demonstration */}
      <p>This is the content of blog post with ID: {id}</p>
    </div>
  );
};

export default BlogPost;