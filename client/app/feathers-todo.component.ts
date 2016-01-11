import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { TodosComponent } from './todos/todos.component';

@Component({
    selector: 'feathers-todo',
    template: `
    <h1>Todo MVC</h1>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/todos/...', name: 'Todos', component: TodosComponent, useAsDefault: true }
])
export class FeathersTodoComponent {

}