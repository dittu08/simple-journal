import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function PostDetail({ posts, setPosts }) {
  const { id } = useParams();
  const postId = parseInt(id, 10);
  const post = posts.find((p) => p.id === postId);
  const navigate = useNavigate();

  if (!post) {
    return <p>Post not found</p>;
  }

  const deletePost = async () => {
    try {
      await fetch(`http://localhost:5000/posts/${postId}`, {
        method: "DELETE",
      });

      const updatedPosts = posts.filter((p) => p.id !== postId);
      setPosts(updatedPosts);

      navigate("/");
    } catch (error) {
      console.error("Failed to delete post", error);
    }
  };

  return (
    <div>
      <p>Post {post.id}</p>
      {post.content.map((block, index) => (
        <div key={index}>
          {block.type === "header" &&
            React.createElement(`h${block.data.level}`, {}, block.data.text)}
          {block.type === "paragraph" && <p>{block.data.text}</p>}
        </div>
      ))}

      <Link to={`/edit/${post.id}`}>
        <button>Edit</button>
      </Link>

      <button onClick={deletePost}>Delete</button>
    </div>
  );
}

export default PostDetail;
