import { Task } from "./task";
import { Todo } from "./todo";

const UI = (() => {
    const dialogNewTask = document.querySelector('.dialog-new-task');
    const dialogNewProject = document.querySelector('.dialog-new-project');
    const btnOpenDialog = document.querySelector('.btn-open-dialog');
    const btnAddDialog = document.querySelector('.btn-add-task');
    const btnOpenProject = document.querySelector('.btn-open-project');
    const btnAddProject = document.querySelector('.btn-add-project');
    const tbody = document.querySelector('tbody')


    function init (){
        btnOpenDialog.addEventListener('click', () => dialogNewTask.showModal());
        btnAddDialog.addEventListener('click', handleAddTodo);
        btnOpenProject.addEventListener('click', () => dialogNewProject.showModal());
        btnAddProject.addEventListener('click', handleAddproject);
    }

    function handleAddTodo (e){
        e.preventDefault();

        const titleInput = document.querySelector('#title').value;
        const descriptionInput = document.querySelector('#description').value;
        const dateInput = document.querySelector('#date').value;
        const priorityInput = document.querySelector('#priority').value;
        const projectInput = document.querySelector('#project').value;


        const todo = new Task (titleInput, descriptionInput, dateInput, priorityInput, projectInput);
        Todo.addTodo(todo)
        renderTask(todo)
        dialogNewTask.close();
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

    function handleAddproject (e){
        e.preventDefault();
        renderProject()
        dialogNewProject.close();
    }

    function renderProject (){

        const options = ['Project 1'];

        //pushes new project 

        //project 1 gets reiterated each click

        
        const projectInput = document.querySelector('#addProject').value;
        const ul = document.querySelector('.project-list')
        const li = document.createElement('li');
        const projectList = document.createTextNode(projectInput);

        li.appendChild(projectList);
        ul.appendChild(li);

        const newOption = projectInput;
        options.push(newOption);

        const select = document.querySelector('#project');
        options.forEach(option => {
            let newOption = document.createElement('option');
            newOption.innerText = option;
            select.appendChild(newOption);
        })
    }

    return { init };
})();

export { UI }