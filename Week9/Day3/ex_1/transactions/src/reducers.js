const initState = {
  edit_flag: false,
  financeArr: [],
  account: "",
  fsc: "",
  holder: "",
  amount: "",
  id: 0,
  editId: "",
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "ACCOUNT":
      return { ...state, account: action.payload };

    case "FSC":
      return { ...state, fsc: action.payload };
    case "NAME":
      return { ...state, holder: action.payload };
    case "AMOUNT":
      return { ...state, amount: action.payload };

    case "OBJ":
      if (!state.edit_flag) {
        return {
          ...state,
          id: state.id + 1,
          financeArr: [...state.financeArr, action.payload],
        };
      } else {
        const cloneEdArr = [...state.financeArr];
        cloneEdArr.splice(state.editId, 1, action.payload);

        return {
          ...state,
          id: state.id + 1,
          financeArr: cloneEdArr,
          edit_flag: false,
        };
      }

    case "EDIT":
      return { ...state, editId: action.payload, edit_flag: true };

    case "DEL":
      const cloneArr = [...state.financeArr];
      cloneArr.splice(action.payload, 1);
      return { ...state, financeArr: cloneArr };

    default:
      return { ...state };
  }
};
