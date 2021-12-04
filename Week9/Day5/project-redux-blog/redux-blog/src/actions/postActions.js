export const deletePost = (id) => {
  return {
    type: "DEL",
    payload: id,
  };
};
