const inputTask = document.getElementById('input-field')

const addTask = document.getElementById('add-btn')
 
const ulList = document.getElementById('ul-list')

const tasks = []

addTask.addEventListener('click', () =>{
    const taskText = inputTask.value.trim()

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
    }

    tasks.push(newTask)
    saveTask()
})

function saveTask(){
    localStorage.setItem('tasks', JSON.stringify(tasks))
}