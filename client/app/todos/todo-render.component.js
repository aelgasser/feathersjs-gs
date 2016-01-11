var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var todos_service_1 = require('./todos.service');
var TodoRenderComponent = (function () {
    function TodoRenderComponent(_todosService) {
        this._todosService = _todosService;
    }
    TodoRenderComponent.prototype.ngOnInit = function () {
        // this._todosService.currentTodo.subscribe(
        //     todo => { console.log(todo); },
        //     err => console.log(err)
        // );
        // this._todosService.getTodo(this.todo.id);
        // this._todosService.socketListenOnPatched(this.todo.id);
    };
    TodoRenderComponent.prototype.toggleDone = function () {
        this.todo.done = !this.todo.done;
        this._todosService.patch(this.todo);
    };
    TodoRenderComponent.prototype.onRemove = function () {
        this._todosService.remove(this.todo.id);
    };
    TodoRenderComponent = __decorate([
        core_1.Component({
            selector: 'todo-render',
            templateUrl: 'app/todos/todo-render.component.html',
            inputs: ['todo']
        }), 
        __metadata('design:paramtypes', [todos_service_1.TodosService])
    ], TodoRenderComponent);
    return TodoRenderComponent;
})();
exports.TodoRenderComponent = TodoRenderComponent;
//# sourceMappingURL=todo-render.component.js.map