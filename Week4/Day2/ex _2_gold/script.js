let landscape = function () {
  let result = "";
  let flat = function (x) {
    for (let count = 0; count < x; count++) {
      result = result + "_";
    }
  };
  let mountain = function (x) {
    result = result + "/";
    for (let counter = 0; counter < x; counter++) {
      result = result + "'";
    }
    result = result + "\\";
  };

  flat(4);
  mountain(4);
  flat(4);
  return result;
};

landscape(); // the function will start by making an empty string then " will call flat() " and iterate 4 times with underling"_" then add call mountain() start with  "/" then iterate 4 time with "'" and then closing with "\\" then there will be again call for flat() and iterate 4 time with underling
// at the end it will look like this : "____/''''\\____ "
