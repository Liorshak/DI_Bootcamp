import RobotCard from "./RoboCard";
import { connect } from "react-redux";
import { robotArr } from "../actions";

const RoboList = ({ filterArr, robotArr, text }) => {
  let arr;
  if (text.length == 0) {
    arr = robotArr;
  } else {
    arr = filterArr;
  }
  console.log(filterArr);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        maxHeight: "85vh",
        overflow: "auto",
        width: "600px",
        margin: "auto",
      }}
    >
      {arr.map((item) => {
        return <RobotCard robot={item} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filterArr: state.filterArr,
    robotArr: state.robotArr,
    text: state.text,
  };
};

export default connect(mapStateToProps)(RoboList);
