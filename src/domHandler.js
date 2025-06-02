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
        const descriptionInput = document.querySelector('#description').value;
        const dateInput = document.querySelector('#date').value;



        const todo = new Task (titleInput, descriptionInput, dateInput);
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
            <button class="delete-button">Delete</button>`
            
        tbody.appendChild(tr);

        const btnDelete = document.querySelectorAll('.delete-button');
        console.log(btnDelete)

        btnDelete.forEach(btn => {
            btn.addEventListener('click', (e) => {
                console.log('button clicked')
                console.log(e.target.parentNode);
                e.target.parentNode.remove();
            })
        })
        // for (let i = 0; i < btnDelete.length; i++){
        //     btnDelete[i].addEventListener('click', (e) => {
        //         console.log('button clicked')
        //         // console.log(e.target.parentNode);
        //         // e.target.parentNode.remove();
        //     })
        // }
    }
    return { init };
})();

export { UI }