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
var router_1 = require('angular2/router');
var todos_component_1 = require('./todos/todos.component');
var FeathersTodoComponent = (function () {
    function FeathersTodoComponent() {
    }
    FeathersTodoComponent = __decorate([
        core_1.Component({
            selector: 'feathers-todo',
            template: "\n    <h1>Todo MVC</h1>\n    <router-outlet></router-outlet>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/todos/...', name: 'Todos', component: todos_component_1.TodosComponent, useAsDefault: true }
        ]), 
        __metadata('design:paramtypes', [])
    ], FeathersTodoComponent);
    return FeathersTodoComponent;
})();
exports.FeathersTodoComponent = FeathersTodoComponent;
//# sourceMappingURL=feathers-todo.component.js.map