const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
	const taskText = taskInput.value.trim();

	if (taskText === "") { return;}

	const li = document.createElement("li");
	li.innerHTML = `${taskText} <button class= "delete-button">Delete</button>`

	taskList.appendChild(li);
	taskInput.value = "";

	const deleteButton = li.querySelector(".delete-button");
	deleteButton.addEventListener("click", () =>{
		taskList.removeChild(li)
	})
}