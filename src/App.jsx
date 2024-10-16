import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WritePage from "./WritePage";
import PostListPage from "./PostListPage";
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
          element={<PostListPage posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/write"
          element={<WritePage posts={posts} setPosts={setPosts} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
