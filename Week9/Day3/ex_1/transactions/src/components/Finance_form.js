import { connect } from "react-redux";

import {
  getAccount,
  getFSC,
  getName,
  getAmount,
  Submit,
  getNewObj,
} from "../actions";

const Finance_form = (props) => {
  const {
    getAccount,
    getFSC,
    getName,
    getAmount,
    account,
    fsc,
    holder,
    amount,
    id,
    getNewObj,
  } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Financial Transactions:</h1>
      <input
        type="text"
        name="account"
        placeholder="Account Number"
        onChange={getAccount}
      />
      <input type="text" name="fsc" placeholder="FSC" onChange={getFSC} />
      <input
        type="text"
        name="name"
        placeholder="A/C Holder Name"
        onChange={getName}
      />
      <input
        type="text"
        name="amount"
        placeholder="Amount"
        onChange={getAmount}
      />
      <button onClick={() => getNewObj({ account, fsc, holder, amount, id })}>
        Submit
      </button>

      <hr />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAccount: (e) => dispatch(getAccount(e.target.value)),
    getFSC: (e) => dispatch(getFSC(e.target.value)),
    getName: (e) => dispatch(getName(e.target.value)),
    getAmount: (e) => dispatch(getAmount(e.target.value)),
    Submit: () => dispatch(Submit()),
    getNewObj: (obj) => dispatch(getNewObj(obj)),
  };
};

const mapStateToProps = (state) => {
  return {
    account: state.account,
    fsc: state.fsc,
    holder: state.holder,
    amount: state.amount,
    id: state.id,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Finance_form);
