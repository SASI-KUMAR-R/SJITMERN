import axios from "axios";
import { useEffect, useState } from "react";

const UseEffectAPI = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log("Can't reach the API", err));
  }, []);

  return (
    <div>
      <h1>This is useEffect example with API</h1>
      <h2>
        We are going to fetch data from JSON Placeholder and display the data
      </h2>
      <ol>
        {posts.map((post) => (
          <li key={post.id} >{post.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default UseEffectAPI;
