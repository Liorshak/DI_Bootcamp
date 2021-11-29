import { connect } from "react-redux";
import { searchPosts } from "../actions/actions";

const Post = (props) => {
  return (
    <div style={{ marginLeft: "10px" }}>
      <h3>Search Posts</h3>
      <input type="text" onChange={props.searchPosts} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchPosts: (e) => dispatch(searchPosts(e.target.value)),
  };
};

export default connect(null, mapDispatchToProps)(Post);
