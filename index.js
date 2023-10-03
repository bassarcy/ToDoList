const addButton = document.getElementById("btn")
let taskInput;

addButton.addEventListener("click", () => {
    taskInput = window.prompt("Add a task: ")
    let newItem = document.createElement("li")
    let newItemText = document.createTextNode(taskInput)
    newItem.appendChild(newItemText)
    itemList = document.getElementById("list")
    itemList.appendChild(newItem)
})
    