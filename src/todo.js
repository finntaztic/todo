// Manages todos (add, remove, store)


const Todo = (() => {
    const todos = [];

    //store the todo in the library
    function addTodo(todo){
        todos.push(todo);
        console.log(todos);
    }

    function removeBook(id){ //this is a bit too advanced for me, i used chatgpt
        const index = todos.findIndex(todo => todo.getID() === id);
        if (index !== -1) todos.splice(index, 1);
    }
    return {addTodo, removeBook};
})();

export {Todo}