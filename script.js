let header = document.getElementById("header");
let taskInput = document.getElementById("taskInput");
let taskBtn = document.getElementById("taskBtn");
let taskCount = document.getElementById("taskCount");
let taskList = document.getElementById("taskList");

let count = 0;

taskBtn.addEventListener('click', function() {
  let nextTask = taskInput.value;
  // Ana I think this is a better logic/approach, it works just fine aswell.
  if(!nextTask){
    return;
  }
  let li = document.createElement("li");
    let taskSpan = document.createElement("span");
    taskSpan.textContent = nextTask;
    
    let noteInput = document.createElement("input");
    noteInput.type = "text";
    noteInput.placeholder = "Notes?";
    noteInput.classList.add("noteInput");
    li.classList.add("tasks"); 
    count++;
    taskCount.textContent = count;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("appBtn"); // I learned about this months ago so I used it
    deleteBtn.textContent = "Delete";
    
    deleteBtn.addEventListener('click', function() {
    li.remove();
    count--;
    taskCount.textContent = count;
    });
    
    li.appendChild(taskSpan);
    li.appendChild(noteInput);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  taskInput.value = "";
});
