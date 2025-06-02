class Task {
    #title;
    #description;
    #date;
    #priority;
    #project;
    #id;

    constructor (title, description, date, priority, project, id = crypto.randomUUID()){
        this.#title = title;
        this.#description = description;
        this.#date = date;
        this.#priority = priority;
        this.#project = project;
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

    getProject (){
        return this.#project
    }

    getID () {
        return this.#id;
    }
}
export { Task }