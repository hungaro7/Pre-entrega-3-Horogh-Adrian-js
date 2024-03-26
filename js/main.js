// Lista de tareas
let tasks = [];

// Función para agregar una tarea
function addTask(taskText) {
    if (taskText.trim() !== "") {
        const task = {
            text: taskText,
            completed: false,
            createdAt: new Date()
        };
        tasks.push(task);
        updateTaskList();
    }
}

// Función para eliminar una tarea
function removeTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

// Función para actualizar la lista de tareas en el DOM
function updateTaskList() {
    const taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = `${task.text} - Creada el: ${task.createdAt.toLocaleDateString()}`;
        if (task.completed) {
            li.style.textDecoration = "line-through";
        }
        const button = document.createElement("button");
        button.textContent = "Eliminar";
        button.onclick = () => removeTask(index);
        li.appendChild(button);
        taskListElement.appendChild(li);
    });
}

// Código para interactuar con la interfaz de usuario
document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("addTaskButton");
    const taskInput = document.getElementById("taskInput");

    addTaskButton.addEventListener("click", function() {
        addTask(taskInput.value);
        taskInput.value = "";
    });

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask(taskInput.value);
            taskInput.value = "";
        }
    });
});