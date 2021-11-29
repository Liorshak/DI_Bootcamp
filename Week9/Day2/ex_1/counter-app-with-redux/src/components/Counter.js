import { connect } from "react-redux";
import { addOne, minusOne } from "../actions";
import React from "react";

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.addOne}>+</button>
      {props.counter}
      <button onClick={props.minusOne}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOne: () => dispatch(addOne()),
    minusOne: () => dispatch(minusOne()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
