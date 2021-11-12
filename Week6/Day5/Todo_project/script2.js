(function () {
  if (localStorage.taskArr != undefined) {
    var taskList = JSON.parse(localStorage.taskArr);
  } else {
    var taskList = [];
  }

  taskList = taskList.sort(compare);
  console.log(localStorage.taskArr);

  for (let task of taskList) {
    let mainTaskArea = document.getElementById("mainTaskArea");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", task.id);

    let newName = document.createElement("h3");
    newName.appendChild(document.createTextNode(task.name));
    newName.addEventListener("click", show);
    newDiv.appendChild(newName);

    let newInfoDiv = document.createElement("div");
    let newP = document.createElement("p");
    newP.appendChild(document.createTextNode(task.description));
    newInfoDiv.appendChild(newP);
    let newPSD = document.createElement("p");
    newPSD.appendChild(
      document.createTextNode(`Start Date: ${DateFormate(task.startDate)}`)
    );
    newInfoDiv.appendChild(newPSD);
    let newPSE = document.createElement("p");
    newPSE.appendChild(
      document.createTextNode(`End Date: ${DateFormate(task.endDate)}`)
    );
    newInfoDiv.appendChild(newPSE);

    let newRemain = document.createElement("p");
    newRemain.appendChild(
      document.createTextNode(
        remainingTime(task.startDate, task.endDate) + " days remaining"
      )
    );
    newInfoDiv.appendChild(newRemain);

    let newSection = document.createElement("section");
    let clearBtn = document.createElement("button");
    clearBtn.appendChild(document.createTextNode("x"));
    clearBtn.addEventListener("click", clear);
    newSection.appendChild(clearBtn);
    let finishCheck = document.createElement("input");
    finishCheck.setAttribute("type", "checkbox");
    finishCheck.classList.add("check");
    finishCheck.addEventListener("change", finish);
    newSection.appendChild(finishCheck);
    newSection.classList.add("btnArea");
    newInfoDiv.appendChild(newSection);
    newInfoDiv.classList.add("hidden");
    newInfoDiv.classList.add("detail");
    newDiv.appendChild(newInfoDiv);
    if (task.finish) {
      newDiv.classList.add("finished");
    } else {
      newDiv.classList.remove("finished");
    }

    if (remainingTime(task.startDate, task.endDate) < 0) {
      newDiv.classList.add("noTime");
    } else {
      newDiv.classList.remove("noTime");
    }

    mainTaskArea.appendChild(newDiv);
  }

  let clearAll = document.getElementById("clearAll");
  clearAll.addEventListener("click", clearAlltask);
})();

var clickCount = 0;

function show(event) {
  let info = event.target.closest("div").children[1];
  if (clickCount % 2 == 0) {
    info.classList.remove("hidden");
  } else {
    info.closest("div").classList.add("hidden");
  }
  clickCount++;
}

function DateFormate(str) {
  let day = str.substring(8, 10);
  let year = str.substring(0, 4);
  let month = str.substring(5, 7);
  let time = str.substring(11);

  let newDate = day + "/" + month + "/" + year + "  " + time;
  return newDate;
}

function remainingTime(str1, str2) {
  console.log(str1);
  let date1 = new Date(str1);
  let date2 = new Date(str2);
  let date1v = date1.getDate();
  let date2v = date2.getDate();
  let nowV = new Date().getDate();

  //   console.log(now);
  //   console.log(new Date().valueOf());
  //   console.log(new Date().getTime());
  //   console.log(new Date().getDate());

  //   return now.getDate() > date1.getDate()
  //     ? date2.getDate() - now.getDate()
  //     : date2.getDate() - date1.getDate();

  return nowV > date1v ? date2v - nowV : date2v - date1v;
}

function clear(event) {
  let task = event.target.closest("div").parentNode;
  let taskId = task.id;

  let taskArr = JSON.parse(localStorage.taskArr);

  let index = taskArr.findIndex((v) => {
    if (v.id == taskId) return true;
  });

  taskArr.splice(index, 1);

  localStorage.setItem("taskArr", JSON.stringify(taskArr));
  task.remove();
}

function finish(event) {
  let task = event.target.closest("div").parentNode;
  let taskId = task.id;
  console.log(task);
  console.log(event.target.checked);

  let taskArr = JSON.parse(localStorage.taskArr);

  let index = taskArr.findIndex((v) => {
    if (v.id == taskId) return true;
  });
  taskArr[index].finish = event.target.checked;

  console.log(task);

  if (taskArr[index].finish) {
    task.classList.add("finished");
  } else {
    task.classList.remove("finished");
  }

  localStorage.setItem("taskArr", JSON.stringify(taskArr));
}

function compare(a, b) {
  a = new Date(a.startDate);
  av = a.getDate();
  b = new Date(b.startDate);
  bv = b.getDate();

  if (av < bv) {
    return -1;
  }
  if (av > bv) {
    return 1;
  }
  return 0;
}

function clearAlltask() {
  localStorage.clear();
  location.reload();
}
