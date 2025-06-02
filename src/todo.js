// Manages todos (add, remove, store)
const Todo = (() => {
    const todos = [];

    //store the todo in the library
    function addTodo(todo){
        todos.push(todo);
        console.log(todos);
    }

    function removeTodo(){ 
        const btnDelete = document.querySelectorAll('.delete-button');
            btnDelete.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.parentNode.remove();
            })
        })  
    }
    return {addTodo, removeTodo};
})();

export {Todo}