const addButton = document.getElementById("btn")
let taskInput;

addButton.addEventListener("click", () => {
    taskInput = window.prompt("Add a task: ")
    let newItem = document.createElement("li")
    let newItemText = document.createTextNode(taskInput)
    newItem.appendChild(newItemText)
    newItem.classList.add("new-item")
    itemList = document.getElementById("list")
    itemList.appendChild(newItem)
    newItem.addEventListener("click", () => {
        let removePrompt = window.confirm("Would you like to delete this item?")
        if(removePrompt) {
            newItem.remove()
        }
    })
})




    