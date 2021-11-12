(function () {
  if (localStorage.taskArr != undefined) {
    var taskList = JSON.parse(localStorage.taskArr);
  } else {
    var taskList = [];
  }

  taskList = taskList.sort(compare);
  let mainWeek = document.getElementById("mainWeek");
  for (let task of taskList) {
    if (checkNotDue(task.endDate)) {
      let newDiv = document.createElement("div");
      let newName = document.createElement("h3");
      newName.appendChild(document.createTextNode(task.name));
      newDiv.appendChild(newName);

      console.log(`"${startingPoint(task.startDate)}%"`);
      mainWeek.appendChild(newDiv);
      newDiv.style.marginLeft = `${startingPoint(task.startDate)}%`;
      newDiv.style.width = `${width(task.startDate, task.endDate)}%`;
      let randomNum = Math.round(Math.random() * 6);
      let colorarr = [
        "A95385",
        "CF666E",
        "A95385",
        "6F8FA2",
        "D4A469",
        "8B79AE",
        "427983",
      ];
      newDiv.style.backgroundColor = `#${colorarr[randomNum]}`;
      if (task.finish) {
        newDiv.classList.add("finished");
      } else {
        newDiv.classList.remove("finished");
      }
      // newDiv.style.marginLeft = `"${startingPoint(task.startDate)}%"`;
    }
  }
})();

function startingPoint(str) {
  let startingDate = new Date(str);
  let now = new Date();
  if (now < startingDate) {
    startingDateDay = startingDate.getDay();
    startingDateHour = startingDate.getHours();
    console.log((startingDateDay * 24 + startingDateHour) / (24 * 7));
    return ((startingDateDay * 24 + startingDateHour) / (24 * 7)) * 100;
  } else {
    let nowDay = now.getDay();
    let nowHour = now.getHours();
    console.log((nowDay * 24 + nowHour) / (24 * 7));
    return ((nowDay * 24 + nowHour) / (24 * 7)) * 100;
  }
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

function width(str1, str2) {
  let startingDate = new Date(str1);
  let endingDate = new Date(str2);
  let now = new Date();

  if (now > startingDate) {
    var timeLeft = endingDate - now;
  } else {
    var timeLeft = endingDate - startingDate;
  }

  let hoursleft = timeLeft / (1000 * 60 * 60);
  let precentageLength = (hoursleft / (24 * 7)) * 100;
  return Math.min(precentageLength, 100 - startingPoint(str1));
}

function checkNotDue(str) {
  let now = new Date();
  let endDate = new Date(str);
  if (now < endDate) {
    return true;
  } else {
    return false;
  }
}
