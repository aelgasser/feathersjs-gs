import { Component } from 'angular2/core';
import { Todo } from './todo';
import { TodosService } from './todos.service';
import { TodosAddComponent } from './todos-add.component';
import { TodoRenderComponent } from './todo-render.component';

@Component({
    selector: 'todos',
    templateUrl: 'app/todos/todos-list.component.html',
    directives: [TodosAddComponent, TodoRenderComponent]
})
export class TodosListComponent {
    // properties declaration
    public todos: Todo[] = [];

    constructor(
        private _todosService: TodosService
    ) { }

    ngOnInit() {
        this._initProperties();
        this._todosService.socketListenOnCreate();
        this._todosService.socketListenOnPatched();
        this._todosService.socketListenOnRemove();
    }

    private _initProperties() {
        this._todosService.todosSubject
            .subscribe(
            todos => { this.todos = todos; console.log(this.todos); }
        );
        this._todosService.getTodos();
    }
}