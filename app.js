document.addEventListener("DOMContentLoaded", () => {
  const inputTask = document.getElementById("input-field");

  const addTask = document.getElementById("add-btn");

  const ulList = document.getElementById("ul-list");

  const tasks = JSON.parse(localStorage.stringify("tasks", tasks)) || [];

  tasks.forEach((task) => randerTask(task));

  addTask.addEventListener("click", () => {
    const taskText = inputTask.value.trim();

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTask();
    randerTask(newTask);
  });

  function randerTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data_id", task.id);
    li.innerHTML = `<span>${task.text}</span>
      <button>deleted</button>
      `;
    li.addEventListener("click", (e) => {
      e.stopPropagation();
      if (e.target.tagName === "BUTTON") task.classList.add("completed");
      task.completed = !task.completed;
      saveTask();
    });

    document.querySelector('button').addEventListener('click', ()=>{
        
    })
    ulList.appendChild(li);
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
