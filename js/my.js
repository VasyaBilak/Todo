let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let ul = document.querySelector('.list-group');
let form = document.forms['AddTodoItem'];
let inputText = form.elements['todoText'];

function listTemplate(task){
//    Create list item
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center';
    let span = document.createElement('span');
    span.textContent = task;
//    Create tag i fas fa-trash-alt
    let iDelete = document.createElement('i');
    iDelete.className = 'fas fa-trash-alt delete-item ml-4';
    let iEdit = document.createElement('i');
    iEdit.className = 'fas fa-edit edit-item ml-auto';
    
//    Append delete icon to li
    li.appendChild(span);
    li.appendChild(iEdit);
    li.appendChild(iDelete);
    

    return li;
}

function clearList(){
    ul.innerHTML = '';
}
    
function generateList(tasksArray){
    clearList()
    for ( let i = 0; i<tasksArray.length; i++){
    ul.appendChild(listTemplate(tasksArray[i]));
    }
//    setDeleteEvent();
}

function addList(list){
    tasks.unshift(list);
//    generateList(tasks);
    ul.insertAdjacentElement('afterbegin', listTemplate(list));
//    Add to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


let btn = document.querySelector('.clear-btn');

function onClick(e){
    console.log(e);
};

btn.addEventListener("click", onClick);
   
//console.dir(btn);
//console.log(deleteBtns);

function deleteListItem(target){
                                            //Delete list item
                                            //1. найти родителя
                                            //2. удалили родителя
                                            //3. splice, index, indexOf, text
        let parent = target.closest('li');
        let index = tasks.indexOf(parent.textContent);
        tasks.splice(index, 1);
        parent.remove();
//        console.log(tasks);
//        Update to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));

}

ul.addEventListener('click', function(e){
    if(e.target.classList.contains('delete-item')){
        deleteListItem(e.target);
    }else if(e.target.classList.contains('edit-item')){
        let span = e.target.closest('li').querySelector('span');
        span.setAttribute('contenteditable', true);
        span.focus();
    }
});

//function setDeleteEvent(){
//    for(let i=0; i<deleteBtns.length; i++){
//    deleteBtns[i].addEventListener('click', function(e){
//        console.log('click');
//    });
//};
//    
//};


form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!inputText.value){
        inputText.classList.add('is-invalid');
    } else {
        inputText.classList.remove('is-invalid');
        addList(inputText.value);
        form.reset();
    }
});

inputText.addEventListener('keyup', function(e){
    if(inputText.value){
        inputText.classList.remove('is-invalid');
    }
})
    
//    generateList
    generateList(tasks);
    
  let body = document.body;  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

