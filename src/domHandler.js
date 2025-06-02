import { Task } from "./task";
import { Todo } from "./todo";

const UI = (() => {
    const dialog = document.querySelector('dialog');
    const btnOpenDialog = document.querySelector('.btn-open-dialog');
    const btnAddDialog = document.querySelector('.btn-add-task');
    const tbody = document.querySelector('tbody')


    function init (){
        btnOpenDialog.addEventListener('click', () => dialog.showModal());
        btnAddDialog.addEventListener('click', handleAddTodo);
    }

    function handleAddTodo (e){
        e.preventDefault();

        const titleInput = document.querySelector('#title').value;
        const descriptionInput = document.querySelector('#description').value;
        const dateInput = document.querySelector('#date').value;
        const priorityInput = document.querySelector('#priority').value;


        const todo = new Task (titleInput, descriptionInput, dateInput, priorityInput);
        Todo.addTodo(todo)
        renderTask(todo)
        dialog.close();
    }

    function renderTask (todo){
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <input type="checkbox" id="todo" name="todo" />
            <label for="todo">${todo.getTitle()}</label><br>
            <p>${todo.getDescription()}</p><br>
            <p>${todo.getDate()}</p><br>
            <p>${todo.getPriority()}</p><br>
            <button class="delete-button">Delete</button>`
            
        tbody.appendChild(tr);

        const btnDelete = document.querySelectorAll('.delete-button');
            btnDelete.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.parentNode.remove();
            })
        })  
    }

    function addProject (){
        const opt = document.createElement('')
    }
    return { init };
})();

export { UI }