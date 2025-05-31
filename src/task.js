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

    getTitle (){
        return this.#title;
    }

    getID () {
        return this.#id = id;
    }
}


export { Task }