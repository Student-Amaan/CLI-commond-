document.addEventListener('DOMContentLoaded',()=>{
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
    });

    function randerTask(task) {
      const li = document.createElement('li')
      li.setAttribute()
    }

    function saveTask() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
})