import { Task } from "./task";
import { Todo } from "./todo";

const UI = (() => {
    const dialog = document.querySelector('dialog');
    const btnOpenDialog = document.querySelector('.btn-open-dialog');
    const btnAddDialog = document.querySelector('.btn-add-task');
    const tbody = document.querySelector('tbody')



    function init (){
        btnOpenDialog.addEventListener('click', () => dialog.showModal());
        btnAddDialog.addEventListener('click', handleAddTodo) 
    }

    function handleAddTodo (e){
        e.preventDefault();

        const titleInput = document.querySelector('#title').value;

        const todo = new Task (titleInput);
        Todo.addTodo(todo)
        renderTask(todo)
        dialog.close();
    }

    function renderTask (todo){
        const tr = document.createElement('tr');
        console.log (todo.getTitle())
        
        tr.innerHTML = `
            <input type="checkbox" id="todo" name="todo" />
            <label for="todo">${todo.getTitle()}</label>
            <td><button class="delete-button">Delete</button></td>`
            
        tbody.appendChild(tr);

        const btnDelete = document.querySelector('.delete-button');
        btnDelete.addEventListener('click', () => {
            
        })
    }
    //add function that would add the contetn in the wepbpage

    //renderboard will ahdnle appending shit

    return { init };
})();

export { UI }