import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  console.log("hello");

  useEffect(() => {
    //must use callback to use async function in useEffect //
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      console.log(res.data.results[0].name);

      setPosts(res.data.results);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  //console.log(https://jsonplaceholder.typicode.com/posts/
  //Get current posts //
  const indexOfLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexofFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container mt-5">
      <h3 className="text-primary mb-3 text-center">
        Pokemon Pokedex Pagination
      </h3>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
