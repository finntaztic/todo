// Manages todos (add, remove, store)
const Todo = (() => {
    const todos = [];

    //store the todo in the library
    function addTodo(todo){
        todos.push(todo);
        console.log(todos);
    }

    return {addTodo};
})();

export {Todo}