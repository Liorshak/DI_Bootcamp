import { connect } from "react-redux";
import { Outlet } from "react-router-dom";

import Post from "./Post";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Home = ({ postList }) => {
  //   const [postList, setPostList] = useState([]);

  //   useEffect(() => {
  //     setPostList(props.postList);
  //   }, []);
  console.log(postList);

  return (
    <div>
      <h1>All posts</h1>

      {postList.map((post, i) => {
        return (
          <>
            <Link
              style={{
                display: "block",
                margin: "1rem 0",
                color: "black",
              }}
              to={`/posts/${post.id}`}
              key={i}
            >
              <Post data={post} id={i} />
            </Link>
          </>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postList: state.postList,
  };
};

export default connect(mapStateToProps)(Home);
