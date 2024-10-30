import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "./Editor";

function EditPost({ posts, setPosts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const postId = parseInt(id, 10);

  const post = posts.find((p) => p.id === postId);

  const [data, setData] = useState(post ? { blocks: post.content } : {});

  useEffect(() => {
    if (!post) {
      navigate("/");
    }
  }, [post, navigate]);

  const updatePost = async () => {
    const updatedPost = { id: postId, content: data.blocks };

    try {
      const response = await fetch(`http://localhost:5000/posts/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      });
      const result = await response.json();

      const updatedPosts = posts.map((p) => (p.id === postId ? result : p));
      setPosts(updatedPosts);

      navigate("/");
    } catch (error) {
      console.error("Failed to update post", error);
    }
  };

  return (
    <div className="editor">
      <h2>Edit Post</h2>
      {post && (
        <>
          <Editor
            data={data}
            onChange={setData}
            editorblock="editorjs-container"
          />
          <button className="savebtn" onClick={updatePost}>
            Save
          </button>
        </>
      )}
    </div>
  );
}

export default EditPost;
