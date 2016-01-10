var browser_1 = require('angular2/platform/browser');
var feathers_todo_component_1 = require('./feathers-todo.component');
var todos_service_1 = require('./todos/todos.service');
browser_1.bootstrap(feathers_todo_component_1.FeathersTodoComponent, [
    todos_service_1.TodosService
]);
//# sourceMappingURL=boot.js.map