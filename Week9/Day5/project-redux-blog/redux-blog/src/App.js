import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Post />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select a post</p>
              </main>
            }
          />
          <Route path="/posts:postId" element={<Post />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
