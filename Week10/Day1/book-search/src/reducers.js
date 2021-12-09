import { getBooks, searchTerm } from "./actions";

const initialState = {
  bookArr: [],
  sortBy: "",
  searchTxt: "",
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case getBooks: {
      return { ...state, bookArr: action.payload };
    }

    case searchTerm: {
      return { ...state, searchTxt: action.payload };
    }

    case "NEWEST":
      return { ...state, sortBy: "&orderBy=newest" };

    case "RELEVANCE":
      return { ...state, sortBy: "&orderBy=relevance" };
    case "NONE":
      return { ...state, sortBy: "" };

    default:
      return { ...state };
  }
};
