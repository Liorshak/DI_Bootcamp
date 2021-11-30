export const getAccount = (value) => {
  return {
    type: "ACCOUNT",
    payload: value,
  };
};

export const getFSC = (value) => {
  return {
    type: "FSC",
    payload: value,
  };
};

export const getName = (value) => {
  return {
    type: "NAME",
    payload: value,
  };
};

export const getAmount = (value) => {
  return {
    type: "AMOUNT",
    payload: value,
  };
};

export const Submit = () => {
  return {
    type: "SUBMIT",
  };
};

export const editIt = (value) => {
  return {
    type: "EDIT",
    payload: value,
  };
};

export const deleteIt = (value) => {
  return {
    type: "DEL",
    payload: value,
  };
};

export const getNewObj = (newObj) => {
  return {
    type: "OBJ",
    payload: newObj,
  };
};
