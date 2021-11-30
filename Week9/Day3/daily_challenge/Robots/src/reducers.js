const initState = {
  robotArr: [],
  text: "",
  filterArr: [],
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case "USERS":
      return { ...state, robotArr: action.payload };

    case "WORD":
      return { ...state, text: action.payload };

    case "FILTER":
      return {
        ...state,
        text: action.payload,
        filterArr: state.robotArr.filter((r) => {
          return r.name.toLowerCase().includes(action.payload.toLowerCase());
        }),
      };
    default:
      return { ...state };
  }
};
