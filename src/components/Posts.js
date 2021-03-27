import axios from "axios";
import React, { useState } from "react";

const Posts = ({ posts, loading }) => {
  const [pokemon, setPokemon] = useState("");

  function choosePokemon() {
    let me = axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(console.log);
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="list-group mb-4 text-center">
      {posts.map((post) => (

        <p
          onClick={() => {
            setPokemon(post.name);
            choosePokemon();
          }}
          key={post.name}
          className="list-group-item"
        >
          {post.name.charAt(0).toUpperCase() + post.name.slice(1)}
        </p>

        <button key={post.name} className="list-group-item">
          {/* capitalizing the first character  */}
          {post.name.charAt(0).toUpperCase() + post.name.slice(1)}
        </button>

      ))}
    </ul>
  );
};

export default Posts;
