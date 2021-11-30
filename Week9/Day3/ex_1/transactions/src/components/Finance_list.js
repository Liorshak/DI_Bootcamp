import { connect } from "react-redux";
import { editIt, deleteIt } from "../actions";
import React from "react";

class Finance_list extends React.Component {
  render() {
    const { editIt, deleteIt, financeArr, id } = this.props;
    return (
      <div>
        {financeArr.map((pay, i) => {
          return (
            <div key={i}>
              <span style={{ border: "1px solid black" }}>{pay.account}</span>
              <span style={{ border: "1px solid black" }}>{pay.fsc}</span>
              <span style={{ border: "1px solid black" }}>{pay.holder}</span>
              <span style={{ border: "1px solid black" }}>{pay.amount}</span>
              <button onClick={() => editIt(i)}>Edit</button>
              <button onClick={() => deleteIt(i)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    financeArr: state.financeArr,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    editIt: (id) => dispatch(editIt(id)),
    deleteIt: (id) => dispatch(deleteIt(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Finance_list);
