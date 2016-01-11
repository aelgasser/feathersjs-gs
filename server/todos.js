var Todos = (function () {
    function Todos() {
        // The current id counter
        this._id = 1;
        // An array with all todos
        this._todos = [
            {
                id: 0,
                text: 'First Todo',
                done: true
            }
        ];
    }
    // Tries to get a single Todo by its id.
    // Throws an error if none can be found
    Todos.prototype._getTodo = function (id) {
        var idInt = parseInt(id, 10);
        var todo = this._todos.filter(function (todo) { return todo.id === idInt; })[0];
        if (todo) {
            return todo;
        }
        else {
            throw new Error('Could not find Todo');
        }
    };
    // Return all todos
    Todos.prototype.find = function (params, callback) {
        try {
            callback(null, this._todos);
        }
        catch (error) {
            callback(error);
        }
    };
    // Returns a single Todo by id
    Todos.prototype.get = function (id, params, callback) {
        try {
            callback(null, this._getTodo(id));
        }
        catch (error) {
            callback(error);
        }
    };
    // Create a new Todo
    Todos.prototype.create = function (data, params, callback) {
        // Increment the global ID counter and
        // use it as the Todo id
        data.id = this._id++;
        this._todos.push(data);
        callback(null, data);
    };
    // Update (replace) an existing Todo with new data
    Todos.prototype.update = function (id, data, params, callback) {
        try {
            var todo = this._getTodo(id);
            var index = this._todos.indexOf(todo);
            data.id = todo.id;
            // Replace all the data
            this._todos[index] = data;
            callback(null, data);
        }
        catch (error) {
            callback(error);
        }
    };
    // Extend the data of an existing Todo
    Todos.prototype.patch = function (id, data, params, callback) {
        try {
            var todo = this._getTodo(id);
            // Extend the existing Todo with the new data
            for (var d in data) {
                if (d !== 'id') {
                    todo[d] = data[d];
                }
            }
            callback(null, todo);
        }
        catch (error) {
            callback(error);
        }
    };
    // Remove an existing Todo by id
    Todos.prototype.remove = function (id, params, callback) {
        try {
            var todo = this._getTodo(id);
            var index = this._todos.indexOf(todo);
            // Splice it out of our Todo list
            this._todos.splice(index, 1);
            callback(null, todo);
        }
        catch (error) {
            callback(error);
        }
    };
    return Todos;
})();
exports.Todos = Todos;
//# sourceMappingURL=todos.js.map