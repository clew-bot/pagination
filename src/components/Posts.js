import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <button key={post.name} className="list-group-item">
          {/* capitalizing the first character  */}
          {post.name.charAt(0).toUpperCase() + post.name.slice(1)}
        </button>
      ))}
    </ul>
  );
};

export default Posts;
