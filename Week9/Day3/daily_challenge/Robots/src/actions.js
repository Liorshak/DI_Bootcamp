const USERS = "USERS";

export const getUsers = (data) => {
  return {
    type: "USERS",
    payload: data,
  };
};

// export const getSearchWord = (value) => {
//   return {
//     type: "WORD",
//     payload: value,
//   };
// };

export const filterArr = (value) => {
  return {
    type: "FILTER",
    payload: value,
  };
};
