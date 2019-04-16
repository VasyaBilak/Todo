// Init Id module
const id = Id

const Tasks = (function() {

    let tasks = [],
        instance

    const getTasks = () => {
        return tasks
    }

    const setTasks = array => {
        tasks = array
        return tasks
    }

    const addTask = async task => {
        task.id = id.generate()
        await tasks.unshift(task)
        return task
    }

    const removeTask = async id => {
        tasks = await tasks.filter(task => task.id !== id)
        return tasks
    }

    const removeAll = async () => {
        tasks = []
    }

    const createInstance = () => {
        return {
            getTasks,
            setTasks,
            addTask,
            removeTask,
            removeAll
        }
    }

    return {
        getInstance: () => {
            return instance || (instance = createInstance())
        }
    }
    
}())