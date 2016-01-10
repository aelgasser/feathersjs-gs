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
var TodosComponent = (function () {
    function TodosComponent(_todosService) {
        this._todosService = _todosService;
        // properties declaration
        this.todos = [];
    }
    TodosComponent.prototype.ngOnInit = function () {
        this._initProperties();
        this._todosService.socketListenOnCreate();
        // this.todosSocket.create({
        //     text: 'Created from client'
        // });
    };
    TodosComponent.prototype._initProperties = function () {
        var _this = this;
        this._todosService.todosSubject
            .subscribe(function (todos) { _this.todos = todos; });
        this._todosService.getTodos();
    };
    TodosComponent = __decorate([
        core_1.Component({
            selector: 'todos',
            templateUrl: 'app/todos/todos.component.html'
        }), 
        __metadata('design:paramtypes', [todos_service_1.TodosService])
    ], TodosComponent);
    return TodosComponent;
})();
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map