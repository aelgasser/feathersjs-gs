import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { TodosListComponent } from './todos-list.component';

@Component({
    template:`
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'Todos', component: TodosListComponent, useAsDefault: true }
])
export class TodosComponent {

 }