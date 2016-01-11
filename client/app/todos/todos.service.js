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
var Rx = require('rxjs/Rx');
var TodosService = (function () {
    function TodosService() {
        this._socket = io();
        this._app = feathers().configure(feathers.socketio(this._socket));
        this._todoSocket = this._app.service('todosController');
        this.todosSubject = new Rx.Subject();
        this.currentTodo = new Rx.Subject();
    }
    TodosService.prototype.getTodos = function () {
        var _this = this;
        this._todoSocket.find(function (error, todos) {
            _this.todosSubject.next(todos);
        });
    };
    TodosService.prototype.getTodo = function (id) {
        var _this = this;
        this._todoSocket.get(id, {}, function (err, todo) {
            if (err) {
                console.log(err);
            }
            else {
                _this.currentTodo.next(todo);
            }
        });
    };
    TodosService.prototype.socketListenOnPatched = function (id) {
        var _this = this;
        this._todoSocket.on('patched', function (todo) {
            console.log('patched');
            _this.getTodo(todo.id);
        });
    };
    TodosService.prototype.socketListenOnCreate = function () {
        var _this = this;
        this._todoSocket.on('created', function (todo) {
            console.log('created');
            _this.getTodos();
        });
    };
    TodosService.prototype.create = function (text) {
        this._todoSocket.create({
            text: text
        });
    };
    TodosService.prototype.patch = function (todo) {
        var _this = this;
        this._todoSocket.patch(todo.id, todo, {}, function (err, todo) {
            if (err) {
                console.log(err);
            }
            else {
                _this.getTodo(todo.id);
            }
        });
    };
    TodosService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodosService);
    return TodosService;
})();
exports.TodosService = TodosService;
//# sourceMappingURL=todos.service.js.map