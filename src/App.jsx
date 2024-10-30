import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WritePost from "./WritePost";
import PostList from "./PostList";
import EditPost from "./EditPost";
import PostDetail from "./PostDetail";
import { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <nav>
        <Link to="/">Post List</Link>
        <Link to="/write">Write a Post</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<PostList posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/write"
          element={<WritePost posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/edit/:id"
          element={<EditPost posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/posts/:id"
          element={<PostDetail posts={posts} setPosts={setPosts} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
