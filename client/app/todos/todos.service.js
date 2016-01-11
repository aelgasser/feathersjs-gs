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
    }
    TodosService.prototype.getTodos = function () {
        // this._todoSocket.find((error, todos: Todo[]) => {
        //     this.todosSubject.next(todos);
        // });
        var _this = this;
        Rx.Observable.create(function (observer) {
            _this._todoSocket.find(function (error, todos) {
                observer.next(todos);
            });
        }).subscribe(this.todosSubject);
    };
    TodosService.prototype.getTodo = function (id) {
        this._todoSocket.get(id, {}, function (err, todo) {
        });
    };
    TodosService.prototype.socketListenOnPatched = function () {
        var _this = this;
        this._todoSocket.on('patched', function (todo) {
            _this.getTodos();
        });
    };
    TodosService.prototype.socketListenOnCreate = function () {
        var _this = this;
        this._todoSocket.on('created', function (todo) {
            _this.getTodos();
        });
    };
    TodosService.prototype.socketListenOnRemove = function () {
        var _this = this;
        this._todoSocket.on('removed', function (todo) {
            _this.getTodos();
        });
    };
    TodosService.prototype.create = function (text) {
        this._todoSocket.create({
            text: text,
            done: false
        }, {}, function (err, todo) {
            if (err) {
                console.log(err);
            }
        });
    };
    TodosService.prototype.patch = function (todo) {
        this._todoSocket.patch(todo.id, todo, {}, function (err, todo) {
        });
    };
    TodosService.prototype.remove = function (id) {
        var _this = this;
        this._todoSocket.remove(id, {}, function (err, todo) {
            if (err) {
                console.log(err);
            }
            else {
                _this.getTodos();
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