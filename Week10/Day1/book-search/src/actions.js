export const getBooks = "GETBOOKS";
export const filter = "FILTER";
export const searchTerm = "SEARCH";

const apiKey = "";

export const getBooksList = () => (dispatch, getState) => {
  let sort = getState().sortBy;
  let searchTxt = getState().searchTxt;
  fetch(
    `https://www.googleapis.com/books/v1/volumes/?q=${searchTxt}${sort}&key=${apiKey}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res.items);
      dispatch({
        type: getBooks,
        payload: res.items,
      });
    })
    .catch((err) => console.log(err));
};

export const getValue = (value) => {
  return {
    type: value,
  };
};

export const SortBy = (type) => {
  return {
    type: type,
  };
};

export const getSearchTerms = (value) => {
  return {
    type: searchTerm,
    payload: value,
  };
};
