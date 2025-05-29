// Manages todos (add, remove, store)


const Todo = (() => {
    const todos = [];

    //store the todo in the library
    function addTodo(todo){
        todos.push(todo);
    }

    return {addTodo};
})();

export {Todo}