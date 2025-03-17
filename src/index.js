document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // document.addEventListener("DOMContentLoaded", prevents the script from running until the HTML has been loaded.

  const form = document.getElementById("create-task-form"); // Geting the form element where tasks will be added
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent page from refreshing which is the default behavior of form submission
      const taskInput = document.getElementById("new-task-description");
      const taskText = taskInput.value.trim();

      if (taskText !== "")//this will prevent empty tasks from being added. And the code inside {} runs.
      {
          const taskItem = document.createElement("li");
          taskItem.textContent = taskText; // Create new task item
          
          // Add delete button
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "X";
          deleteButton.style.marginLeft = "10px";
          deleteButton.addEventListener("click", () => {
              taskItem.remove();
          });
          
          taskItem.appendChild(deleteButton); // Put button next to task
          taskList.appendChild(taskItem); // Add to the list
          taskInput.value = ""; // Clear input field
      }
  });
});
