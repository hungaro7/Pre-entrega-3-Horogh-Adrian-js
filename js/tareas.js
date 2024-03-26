// Lista de tareas
let tareas = [];

// Función para agregar una tarea
function agregar_tarea(taskText) {
    if (taskText.trim() !== "") {
        const nuevaTarea = {
            text: taskText,
            completed: false,
            createdAt: new Date()
        };
        tareas.push(nuevaTarea);
        actualizar_tareas();
    }
}

// Función para eliminar una tarea
function borrar_tarea(index) {
    tareas.splice(index, 1);
    actualizar_tareas();
}

// Función para actualizar la lista de tareas en el DOM
function actualizar_tareas() {
    const taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";
    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.textContent = `${tarea.text} - Creada el: ${tarea.createdAt.toLocaleDateString()}`;
        if (tarea.completed) {
            li.style.textDecoration = "line-through";
        }
        const button = document.createElement("button");
        button.textContent = "Eliminar";
        button.onclick = () => borrar_tarea(index);
        li.appendChild(button);
        taskListElement.appendChild(li);
    });
}

// Código para interactuar con la interfaz de usuario
document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("addTaskButton");
    const taskInput = document.getElementById("taskInput");

    addTaskButton.addEventListener("click", function() {
        agregar_tarea(taskInput.value);
        taskInput.value = "";
    });

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            agregar_tarea(taskInput.value);
            taskInput.value = "";
        }
    });
});