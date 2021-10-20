let listTasks = []; //new Array
let toDoInput = document.getElementById("toDoInput"); ///getting input as variable
let listOfTasks = document.getElementById("listTasks"); // getting the element where all the task will show on page

let doneTask = (event) => {
  listTasks[event.target.parentNode["id"]]["done"] = event.target.checked; //binding the check with parent div, true for checked
  if (listTasks[event.target.parentNode["id"]]["done"]) {
    //checking obj if true adding class that mark as finished
    event.target.parentNode.classList.add("finished");
  } else {
    event.target.parentNode.classList.remove("finished");
  }
};

let deleteTask = (event) => {
  listTasks.splice(event.target.parentNode["data-task-id"], 1); //deleting obj from array
  event.target.parentNode.remove(); //removing the full div that contain the task
};

let addTask = () => {
  let newTask = document.createElement("div"); // creating a new div that will hold all txt check and btn
  let newTxt = document.createTextNode(toDoInput.value); // creating txt node base on value
  newTask.setAttribute("data-task-id", listTasks.length); //setting identify attributes
  newTask.setAttribute("id", listTasks.length);
  let newCheck = document.createElement("input"); // creating input
  newCheck.setAttribute("type", "checkbox"); //making the input element as checkbox

  let newObj = {
    //creating new obj for each task
    "task-id": listTasks.length,
    text: toDoInput.value,
    done: false,
  };
  listTasks.push(newObj); //pushing after assigning the current length to save the "-1"
  console.log(listTasks);

  let delBtn = document.createElement("button");
  let delBtnTxt = document.createTextNode("x");
  delBtn.appendChild(delBtnTxt);
  newCheck.addEventListener("change", doneTask); // adding to the check box the event
  delBtn.addEventListener("click", deleteTask); //adding to the del btn the event
  newTask.appendChild(delBtn); //adding to the div the del btn left to right
  newTask.appendChild(newCheck);
  newTask.appendChild(newTxt);
  listOfTasks.appendChild(newTask); //adding to the task section the new div
  toDoInput.value = ""; //clearing the input
};

let checkingInput = () => {
  //checking input is not empty
  if (toDoInput.value.length === 0) {
    alert("Please fill the task needed to be done!");
  } else {
    addTask(); // if not empty moving on to the add task function
  }
};

let creatingNewTask = (event) => {
  // main function for creating new Task
  // main function
  event.preventDefault(); //stopping from form to refresh
  checkingInput(); //checking function inside the add task function
};

let submitBtn = document.getElementById("submit"); //retrieving the add button

submitBtn.addEventListener("click", creatingNewTask); // add the main function to the add button
