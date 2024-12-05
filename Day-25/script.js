const add_btn = document.querySelector('#add-btn');
const cont = document.querySelector('.list');
const input = document.querySelector('#input');


// Load tasks from localStorage
let tasks = [];
const loadTasks = () => {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    tasks = JSON.parse(savedTasks); 
    tasks.forEach(task => {
      const new_item = document.createElement('li');
      new_item.innerHTML = `
        <p>${task.text}</p>
        <button class="delete-btn">Delete</button>
      `;
      if (task.completed) {
        new_item.querySelector('p').classList.add('completed');
      }
      cont.appendChild(new_item);
      
      // Add click event for completion
      new_item.addEventListener('click', () => {
        new_item.querySelector('p').classList.toggle('completed');
        const index = tasks.findIndex(t => t.text === task.text);
        if (index !== -1) {
          tasks[index].completed = !tasks[index].completed;
        }
        saveTask();
      });

      // Add click event for delete
      new_item.querySelector('.delete-btn').addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent parent click event
        cont.removeChild(new_item);
        const index = tasks.findIndex(t => t.text === task.text);
        if (index !== -1) {
          tasks.splice(index, 1);
        }
        saveTask();
      });
    });
  }
};

const addTask = () => {
  const text = input.value.trim();
  if (!text) {
    alert('Please enter a task');
    return;
  } 
  
  const new_item = document.createElement('li');
  new_item.innerHTML = `
    <p>${text}</p>
    <button class="delete-btn">Delete</button>
  `;
  cont.appendChild(new_item);
  
  tasks.push({
    text: text,
    completed: false
  });

  new_item.addEventListener('click', () => {
    new_item.querySelector('p').classList.toggle('completed');
    const index = tasks.findIndex(task => task.text === text);
    if (index !== -1) {
      tasks[index].completed = !tasks[index].completed;
    }
    saveTask();
  });

  // Add click event for delete
  new_item.querySelector('.delete-btn').addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent parent click event
    cont.removeChild(new_item);
    const index = tasks.findIndex(task => task.text === text);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
    saveTask();
  });

  input.value = '';
  saveTask();
};

// Save tasks to localStorage
const saveTask = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Add event listeners
add_btn.addEventListener('click', addTask);

// Add Enter key support
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Load tasks when page loads
loadTasks();
