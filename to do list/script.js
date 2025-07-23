function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return alert("Please enter a task!");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;
  span.onclick = function () {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
