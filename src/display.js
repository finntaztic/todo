
//this part make class to add book from the array to the 


class Task {
    #title;
    #description;
    #priority;
    #id;

    constructor (title, description, priority, id = crypto.randomUUID()){
        this.#title = title;
        this.#description = description;
        this.#priority = priority;
        this.#id = id;
    }

    addTask (){
        const addTaskBtn = document.querySelector ()
    }
}
export {handleEnterTaskClick}