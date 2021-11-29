const initState = {
  counter: 0,
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "ADD":
      return { ...state, counter: state.counter + 1 };

    case "MINUS":
      return { ...state, counter: state.counter - 1 };

    default:
      return { ...state };
  }
};
