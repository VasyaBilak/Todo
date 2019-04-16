const UI = (function () {

    const ul = document.querySelector('.list-group');
    const emptyAlert = document.querySelector('.empty-alert');
    
    const listTemplate = function (task) {
        let li = document.createElement('li');
        li.textContent = task.text;
        li.setAttribute('data-id', task.id);
        li.className = 'list-group-item d-flex align-items-center';
        // Create tag i fa-trash-alt
        let iDelete = document.createElement('i');
        iDelete.className = 'fas fa-trash-alt delete-item ml-auto';

        // Append delete icon to li
        li.appendChild(iDelete);

        return li;
    };

    const addTask = function (task) {
        ul.insertAdjacentElement('afterbegin', listTemplate(task));
    };

    const deleteTask = function (id) {
        const li = ul.querySelector(`[data-id="${id}"]`);
        li.remove();
    };

    const checkList = function () {
        if (!ul.children.length) {
            emptyAlert.style.display = 'block';
        } else {
            emptyAlert.style.display = 'none';
        }
    };

    const deleteAll = function () {
        ul.innerHTML = '';
    };

    return {
        addTask,
        deleteTask,
        checkList,
        deleteAll
    }

}());