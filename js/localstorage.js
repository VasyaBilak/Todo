// Init Tasks module
const allTasks = Tasks.getInstance()

const Localstorage = (function () {
    const update = () => {
        localStorage.setItem('tasks', JSON.stringify(allTasks.getTasks()))
    }

    const getTasks = () => {
        return JSON.parse(localStorage.getItem('tasks'))
    }

    return {
        update,
        getTasks
    }
}())