// let taskArr = JSON.parse(localStorage.getItem(taskArr)) || [];

(function () {
  task_form = document.forms[0];
  task_form.addEventListener("submit", pushLocalStorage);
})();

function pushLocalStorage(event) {
  event.preventDefault();
  if (localStorage.taskArr != undefined) {
    var taskArr = JSON.parse(localStorage.taskArr);
  } else {
    var taskArr = [];
  }

  let nameV = document.getElementById("name").value;
  let descriptionV = document.getElementById("description").value;
  let startV = document.getElementById("startDate").value;
  let endV = document.getElementById("endDate").value;

  if (localStorage.taskArr != undefined) {
    var id = taskArr[taskArr.length - 1].id + 1;
  } else {
    var id = 1;
  }

  let newObj = {
    name: nameV,
    description: descriptionV,
    startDate: startV,
    endDate: endV,
    finish: false,
    id: id,
  };

  console.log(newObj);
  taskArr.push(newObj);

  localStorage.setItem("taskArr", JSON.stringify(taskArr));
}
