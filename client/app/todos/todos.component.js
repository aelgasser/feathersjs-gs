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
var todos_list_component_1 = require('./todos-list.component');
var todos_service_1 = require('./todos.service');
var TodosComponent = (function () {
    function TodosComponent() {
    }
    TodosComponent = __decorate([
        core_1.Component({
            template: "\n    <router-outlet></router-outlet>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [todos_service_1.TodosService]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'Todos', component: todos_list_component_1.TodosListComponent, useAsDefault: true }
        ]), 
        __metadata('design:paramtypes', [])
    ], TodosComponent);
    return TodosComponent;
})();
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map