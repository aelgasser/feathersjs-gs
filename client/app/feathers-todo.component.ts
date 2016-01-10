import { Component } from 'angular2/core';
import { TodosComponent } from './todos/todos.component';

@Component({
    selector: 'feathers-todo',
    template: `
    <h1>Todo MVC</h1>
    <todos></todos>
    `,
    directives: [TodosComponent]
})
export class FeathersTodoComponent {

}