import { useParams, Outlet } from "react-router-dom";
import Home from "./Home";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

const Post = ({ postList, deletePost }) => {
  let params = useParams();

  const findpost = (number) => postList.find((post) => post.id === number);
  let post = findpost(params.postId);
  if (post) {
    return (
      <>
        <h3>Post: {params.postId}</h3>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%2010/Day5/Mini%20Projects/Mini%20Project%201%20-%20Redux%20Blog/blog.png" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 style={{ color: "red" }}>{post.title}</h4>
                <p>
                  <strong>{post.body}</strong>
                </p>
                <button
                  style={{
                    textAlign: "center",
                    margin: "10px",
                    position: "relative",
                    left: "-7%",
                  }}
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </>
    );
  } else {
    return (
      <>
        {postList.map((post) => (
          <h2>Post number: {parseInt(post.id)}</h2>
        ))}{" "}
        <Outlet />
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    postList: state.postList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
