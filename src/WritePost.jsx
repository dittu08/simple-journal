import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "./Editor";

const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "paragraph",
      data: {
        text: "Hello, World!",
        level: 1,
      },
    },
  ],
};

function WritePost({ posts, setPosts }) {
  const [data, setData] = useState(INITIAL_DATA);
  const navigate = useNavigate();

  const addPost = async () => {
    const newPost = {
      id: posts.length + 1,
      content: data.blocks,
      createdAt: new Date(),
    };

    try {
      const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        const createdPost = await response.json();
        setPosts([...posts, createdPost]);
        navigate("/");
      } else {
        console.error("Failed to add post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="editor">
      <h2>Write a Post</h2>
      <Editor data={data} onChange={setData} editorblock="editorjs-container" />
      <button className="savebtn" onClick={addPost}>
        Save
      </button>
    </div>
  );
}

export default WritePost;
