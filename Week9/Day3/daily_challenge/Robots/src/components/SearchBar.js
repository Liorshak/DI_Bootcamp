import { connect } from "react-redux";
import { filterArr } from "../actions";

const SearchBar = ({ filterArr }) => {
  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        borderBottom: "2px solid grey",
        paddingBottom: "10px",
      }}
    >
      <h3> Robot friend</h3>

      <input type="text" onChange={filterArr} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterArr: (e) => dispatch(filterArr(e.target.value)),
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
