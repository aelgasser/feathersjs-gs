import { Todo } from './todo';

export class Todos {
    // The current id counter
    private _id = 1;
    // An array with all todos
    private _todos: Todo[] = [
        {
            id: 0,
            text: 'First Todo',
            done: true
        }
    ];

    // Tries to get a single Todo by its id.
    // Throws an error if none can be found
    private _getTodo(id) {
        let idInt = parseInt(id, 10);
        let todo = this._todos.filter((todo) => todo.id === idInt)[0];

        if (todo) {
            return todo;
        } else {
            throw new Error('Could not find Todo');
        }
    }

    // Return all todos
    find(params, callback) {
        try {
            callback(null, this._todos);
        } catch (error) {
            callback(error);
        }
    }

    // Returns a single Todo by id
    get(id, params, callback) {
        try {
            callback(null, this._getTodo(id));
        } catch (error) {
            callback(error);
        }
    }

    // Create a new Todo
    create(data, params, callback) {
        // Increment the global ID counter and
        // use it as the Todo id
        data.id = this._id++;
        this._todos.push(data);
        callback(null, data);
    }

    // Update (replace) an existing Todo with new data
    update(id, data, params, callback) {
        try {
            let todo = this._getTodo(id);
            let index = this._todos.indexOf(todo);

            data.id = todo.id;
            // Replace all the data
            this._todos[index] = data;
            callback(null, data);
        } catch (error) {
            callback(error);
        }
    }

    // Extend the data of an existing Todo
    patch(id, data, params, callback) {
        try {
            let todo = this._getTodo(id);

            // Extend the existing Todo with the new data
            for (let d in data) {
                if (d !== 'id') {
                    todo[d] = data[d];
                }
            }

            callback(null, todo);
        } catch (error) {
            callback(error);
        }
    }

    // Remove an existing Todo by id
    remove(id, params, callback) {
        try {
            let todo = this._getTodo(id);
            let index = this._todos.indexOf(todo);

            // Splice it out of our Todo list
            this._todos.splice(index, 1);
            callback(null, todo);
        } catch (error) {
            callback(error);
        }
    }
}
