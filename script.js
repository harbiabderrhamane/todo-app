const todoInput = document.getElementById("todo-input");
const todoBtn = document.getElementById("add-todo");
const addTodoDiv = document.getElementById("new-todo");

const createAnewTodo = () => {
  todoBtn.onclick = () => {
    const createDiv = document.createElement("div");
    let inputValue = todoInput.value;
    createDiv.innerText = inputValue;
    addTodoDiv.appendChild(createDiv);
    createDiv.classList.add("todoDiv");
    deleteBtn(createDiv);
  };
};
createAnewTodo();

const deleteBtn = (divOfInformations) => {
  const deleteButton = document.createElement("buttton");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-btn");
  divOfInformations.appendChild(deleteButton);
  deleteButton.onclick = () => {
    divOfInformations.remove();
  };
};
