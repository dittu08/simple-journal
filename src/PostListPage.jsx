function PostListPage({ posts, setPosts }) {
  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <div className="post-list">
      <h2>Post List</h2>
      <ul>
        {posts.length === 0 ? (
          <p>No posts available. Please write a post.</p>
        ) : (
          posts.map((post) => (
            <li key={post.id}>
              <div>
                <strong>{post.title}</strong>
                {post.content.map((block, index) => (
                  <div key={index}>
                    {block.type === "header" && <h1>{block.data.text}</h1>}
                    {block.type === "paragraph" && <p>{block.data.text}</p>}
                  </div>
                ))}
                <button
                  className="deletebtn"
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default PostListPage;
