import { Component } from 'angular2/core';
import { TodosService } from './todos.service';

@Component({
    selector: 'todos-add',
    templateUrl: 'app/todos/todos-add.component.html'
})
export class TodosAddComponent {
    constructor(private _todosService: TodosService) {

    }

    onSubmit(todo: HTMLInputElement) {
        if (todo.value !== '') {
            this._todosService.create(todo.value);
            todo.value = '';
        }
    }

}