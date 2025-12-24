function addTask() {
  let taskInput = document.getElementById("task");
  let taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.innerText = taskText;
  span.onclick = function () {
    li.classList.toggle("completed");
  };

  let delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
