// Manages todos (add, remove, store)


const Todo = (() => {
    const todos = [];

    //store the todo in the library
    function addTodo(todo){
        todos.push(todo);
        console.log(todos);
    }

    function removeTodo(e){ 
        const parent = e.target.parentNode;
        console.log('button clicked');
        console.log(parent);
        parent.remove();
    }
    return {addTodo, removeTodo};
})();

export {Todo}