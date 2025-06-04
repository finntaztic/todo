import { Task } from "./task";
import { Todo } from "./todo";
// import { Projects } from "./projectHandler";

const UI = (() => {

    const options = ['Project 1'];

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
            <button class="project-button">${todo.getProject()}</button><br>
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

    function displayProject (){
        const ul = document.querySelector('.project-list');
        const select = document.querySelector('#project');

        options.forEach(option => {
            const newOption = document.createElement('button');
            newOption.innerText = option;
            option.className = 'project-button';

            const newOptionDiv = document.createElement('div');
            newOptionDiv.appendChild(newOption);

            const btnDeleteProject = document.createElement('button');
            newOptionDiv.appendChild(btnDeleteProject);
            btnDeleteProject.innerHTML = 'Delete';
            btnDeleteProject.setAttribute('class', 'delete_button');

            ul.appendChild(newOptionDiv);

        })

        options.forEach(option => {
            let newOption = document.createElement('option');
            newOption.innerText = option;
            select.appendChild(newOption);
        })
        
        const btnToDelete = document.querySelectorAll('.delete_button');
        console.log(btnToDelete)

        btnToDelete.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.parentNode.remove();
            })
        })  
    }

    displayProject();
    function renderProject (){

        const projectInput = document.querySelector('#addProject').value;

        const newOption = projectInput;
        options.push(newOption);


        const select = document.querySelector('#project');
        const newOptionSelect = document.createElement('option');
        newOptionSelect.innerText = projectInput;
        select.appendChild(newOptionSelect);


        const ul = document.querySelector('.project-list');
        const newOptionList = document.createElement('button');
        newOptionList.innerText = projectInput;

        const newOptionDiv = document.createElement('div');
        const btnDeleteOption = document.createElement('button');
        ul.appendChild(newOptionDiv);
        newOptionDiv.appendChild(newOptionList);
        newOptionDiv.appendChild(btnDeleteOption);
        btnDeleteOption.innerHTML = 'Delete';
        btnDeleteOption.setAttribute('class', 'delete_button');

        const btnToDelete = document.querySelectorAll('.delete_button');
        console.log(btnToDelete)

        btnToDelete.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.parentNode.remove();
            })
        })  
    }

    function loadProject (){
        const projectOne = document.querySelector('.')
    }
 

    return { init };
})();

export { UI }