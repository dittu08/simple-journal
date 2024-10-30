import React from "react";
import { Link } from "react-router-dom";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

function PostList({ posts, setPosts }) {
  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.length === 0 ? (
          <p>No posts available. Please write a post.</p>
        ) : (
          posts.map((post) => (
            <li key={post.id}>
              <div>
                <strong>
                  <Link to={`/posts/${post.id}`}>Post {post.id}</Link>
                </strong>
                <p>{formatDate(post.createdAt)}</p>
                {post.content.map((block, index) => (
                  <div key={index}>
                    {block.type === "header" &&
                      React.createElement(
                        `h${block.data.level}`,
                        {},
                        block.data.text,
                      )}
                    {block.type === "paragraph" && <p>{block.data.text}</p>}
                  </div>
                ))}
                <Link to={`/edit/${post.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default PostList;
