// Init Tasks module
const tasks = Tasks.getInstance(),

// Init UI module
      ui = UI,

// Init LocalStorage
      localstorage = Localstorage,

// Init Notification
      notification = Notification,

// Init Observers
      addTaskObserver = new EventObserver(),
      removeTaskObserver = new EventObserver(),
      removeAllTasksObserver = new EventObserver(),

// Init elements
      form = document.forms['AddTodoItem'],
      inputText = form.elements['todoText'],
      ul = document.querySelector('.list-group'),
      clearBtn = document.querySelector('.clear-btn')

// Subscribe on add task event
addTaskObserver.subscribe(localstorage.update)
addTaskObserver.subscribe(notification.show)
addTaskObserver.subscribe(ui.checkList)

removeTaskObserver.subscribe(localStorage.update)
removeTaskObserver.subscribe(notification.show)
removeTaskObserver.subscribe(ui.checkList)

removeAllTasksObserver.subscribe(localStorage.update)
removeAllTasksObserver.subscribe(notification.show)
removeAllTasksObserver.subscribe(ui.checkList)

window.addEventListener('load',  e => {
    let ls = localstorage.getTasks()
    if (ls.length) {
        ls.forEach(task => {
            tasks.addTask(task)
                .then(oneTask => ui.addTask(oneTask))
        })
    } else {
        ui.checkList()
    }
})


form.addEventListener('submit', e => {
    e.preventDefault()

    if (!inputText.value) {
        // Show error, is-invalid
    } else {
        // let newTask = tasks.addTask({ text: inputText.value })
        // ui.addTask(newTask)
        tasks.addTask({ text: inputText.value })
            .then(task => ui.addTask(task))
            .then(() => addTaskObserver.fire({ 
                text: 'New task added successfully!',
                class: 'alert alert-success' 
            }))
    }
})

ul.addEventListener('click', e => {
    if (e.target.classList.contains('delete-item')) {
        let id = e.target.closest('li').getAttribute('data-id')
        tasks.removeTask(id)
            .then(() => ui.deleteTask(id))
            .then(() => removeTaskObserver.fire({
                text: 'Task removed successfully!',
                class: 'alert alert-warning' 
            }))
    }
})

clearBtn.addEventListener('click', e => {
    tasks.removeAll()
        .then(() => ui.deleteAll())
        .then(() => removeAllTasksObserver.fire({
            text: 'Tasks removed successfully!',
            class: 'alert alert-warning' 
        }))
})