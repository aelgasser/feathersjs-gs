import { Component } from 'angular2/core';
import { Todo } from './todo';
import { TodosService } from './todos.service';

@Component({
    selector: 'todos',
    templateUrl: 'app/todos/todos.component.html'
})
export class TodosComponent {
    // properties declaration
    public todos: Todo[] = [];

    constructor(
        private _todosService: TodosService
    ) { }

    ngOnInit() {
        this._initProperties();
        this._todosService.socketListenOnCreate();

        // this.todosSocket.create({
        //     text: 'Created from client'
        // });
    }

    private _initProperties() {
        this._todosService.todosSubject
            .subscribe(
            todos => { this.todos = todos }
        );
        this._todosService.getTodos();
    }
}