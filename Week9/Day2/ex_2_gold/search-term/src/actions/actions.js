export const searchPosts = (value) => {
  return {
    type: "SEARCH",
    payload: value,
  };
};
