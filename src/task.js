class Task {
    #title;
    #description;
    #date;
    #priority;
    #id;

    constructor (title, description, date, priority, id = crypto.randomUUID()){
        this.#title = title;
        this.#description = description;
        this.#date = date;
        this.#priority = priority;
        this.#id = id;
    }

    getTitle (){
        return this.#title;
    }

    getDescription (){
        return this.#description;
    }

    getDate (){
        return this.#date;
    }

    getPriority (){
        return this.#priority
    }

    getID () {
        return this.#id;
    }
}


export { Task }