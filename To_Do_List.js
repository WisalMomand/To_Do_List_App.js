const taskinput = document.getElementById('inputdata');
const taskbtn = document.getElementById('btn1');
const taskul = document.getElementById('ul1');

// Listen for button clicks
taskbtn.addEventListener('click', () => {
  const taskText = taskinput.value; // Get input value
  if (taskText !== '') {
    // Create a list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add Delete Button
    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.addEventListener('click', () => {
      taskul.removeChild(li); // Remove the task
    });

    // Add a click event to toggle completion
    li.addEventListener('click', () => {
      li.classList.toggle('completed'); // Toggle "completed" class
    });

    li.appendChild(deletebtn); // Appendchid is used to add delete button with the list item
    taskul.appendChild(li); // Append  is used to add  the list item with the unordered list

    // Clear the input field
    taskinput.value = '';
  } else {
    alert('Please enter a task!'); 
  }
});
