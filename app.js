document.addEventListener("DOMContentLoaded", () => {
  const inputTask = document.getElementById("input-field");

  const addTask = document.getElementById("add-btn");

  const ulList = document.getElementById("ul-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => randerTask(task));

  addTask.addEventListener("click", () => {
    const taskText = inputTask.value.trim();
    if(taskText == "") return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTask();
    randerTask(newTask);
    inputTask.value = "";
    console.log(tasks);
  });

  function randerTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data_id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `<span>${task.text}</span>
      <button>deleted</button>
      `;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTask();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTask();
    });
    ulList.appendChild(li);
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
