// Manages todos (add, remove, store)


const Todo = (() => {
    const todos = [];

    //store the todo in the library
    function addTodo(todo){
        todos.push(todo);
        console.log(todos);
    }

    function removeBook(id){
        const index = todos.findIndex(todo => todo.getID() === id);
        if (index !== -1) todos.splice(index, 1);
        //variable of the delete button head
        // where will id comes from tho?? the e.target id?? 
        
        //get the id of where the button belongs and then delete the tr
        // console.log('hello');
        // console.log(e.target.parentNode);
        // e.target.parentNode.remove();
    }

    return {addTodo, removeBook};
})();

export {Todo}