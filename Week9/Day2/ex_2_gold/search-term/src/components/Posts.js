import { connect } from "react-redux";
import { React } from "react";

const Posts = (props) => {
  let { postsArr, filterArr, eValue } = props;
  if (eValue === "") {
    filterArr = [...postsArr];
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        marginLeft: "15px",
      }}
    >
      {filterArr.map((item) => {
        return (
          <li id={item.id}>
            <a href={item.url}>{item.title}</a>
          </li>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postsArr: state.postsArr,
    filterArr: state.filterArr,
    eValue: state.eValue,
  };
};

export default connect(mapStateToProps, null)(Posts);
