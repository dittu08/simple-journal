import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "./Editor";

const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [],
};

function WritePage({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(INITIAL_DATA);
  const navigate = useNavigate();

  const addPost = () => {
    if (!title.trim() || data.blocks.length === 0) {
      alert("제목과 본문을 입력해주세요.");
      return;
    }

    const newPost = {
      id: posts.length + 1,
      title,
      content: data.blocks,
    };

    setPosts([...posts, newPost]);
    setTitle("");
    setData(INITIAL_DATA);
    navigate("/");
  };

  return (
    <div className="editor">
      <h2>Write a Post</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <Editor data={data} onChange={setData} editorblock="editorjs-container" />
      <button className="savebtn" onClick={addPost}>
        Save
      </button>
    </div>
  );
}

export default WritePage;
