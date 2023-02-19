let theInput = document.querySelector(".head input");
let theAddBtn = document.querySelector(".head .add");
let tasks = document.querySelector(".body");
let deleteAll = document.querySelector(".body .clear");


theAddBtn.onclick = function () {
 
  if (theInput.value === "") {
    console.log("No Value");
  } else {
    let noTasks = document.querySelector(".no-tasks");
    if (document.body.contains(document.querySelector(".no-tasks"))) {
     noTasks.remove();
    }
    let mainSpan = document.createElement("span");
    let deleteElement = document.createElement("span");
    let text = document.createTextNode(theInput.value);
    let deleteText = document.createTextNode("X");
    mainSpan.appendChild(text);
    mainSpan.className = 'task-box';
    deleteElement.appendChild(deleteText);
    deleteElement.className = 'delete';
    mainSpan.appendChild(deleteElement);
    tasks.appendChild(mainSpan);
    theInput.value = "";
    theInput.focus();
  }
};

document.addEventListener("click", function (e) {
  if (e.target.className == 'delete') {
    e.target.parentNode.remove();
    if (tasks.childElementCount == 0) {
      createNoTasks();
    }
  }
 

  if (e.target.classList.contains('task-box')) {

    // Toggle Class 'finished'
    e.target.classList.toggle("finished");

  }
});


function createNoTasks() {

  let msgSpan = document.createElement("span");
  let msgText = document.createTextNode("No Tasks To Show");
  msgSpan.appendChild(msgText);
  msgSpan.className = 'no-tasks';
  tasks.appendChild(msgSpan);
}


deleteAll.onclick = function (e){
e.target.parentNode.remove();

};