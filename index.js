document.addEventListener("DOMContentLoaded", () => {
  
    const createTaskForm = document.getElementById('create-task-form')
    
    createTaskForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const taskUlElement = document.getElementById('tasks')
      const newTaskDescription = document.getElementById('new_task_description')
      let liElement = document.createElement('li')
      liElement.textContent = newTaskDescription.value
      let deleteButton = document.createElement('button') 
      deleteButton.textContent = 'Delete'
      deleteButton.addEventListener('click', deleteTask)

      taskUlElement.appendChild(liElement)
      liElement.appendChild(deleteButton)

      createTaskForm.reset()

      function deleteTask(e) {
        e.target.parentNode.remove()
      }


    })
    
    function priorityColor(task) {
      let dropDown = document.getElementById('drop_down_box')
      let priority = dropDown.value
      console.log(priority)
      switch(task) {
        case 'high':
          return 
      }
    }
    
    priorityColor()
 
  
  })

