// const form = document.getElementById("todo-form");
// const input = document.getElementById("todo-input");
// const todoLane = document.getElementById("todo-lane");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const value = input.value;

//   if (!value) return;

//   const newTask = document.createElement("p");
//   newTask.classList.add("task");
//   newTask.setAttribute("draggable", "true");
//   newTask.innerText = value;

//   newTask.addEventListener("dragstart", () => {
//     newTask.classList.add("is-dragging");
//   });

//   newTask.addEventListener("dragend", () => {
//     newTask.classList.remove("is-dragging");
//   });

//   todoLane.appendChild(newTask);

//   input.value = "";
// });


const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerText = "×";

  deleteButton.addEventListener("click", () => {
    newTask.remove();
  });

  newTask.appendChild(deleteButton);

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todoLane.appendChild(newTask);

  input.value = "";
});
