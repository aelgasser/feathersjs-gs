import { Component } from 'angular2/core';
import { Todo } from './todo';
import { TodosService } from './todos.service';

@Component({
    selector: 'todo-render',
    templateUrl: 'app/todos/todo-render.component.html',
    inputs: ['todo']
})
export class TodoRenderComponent {
    public todo: Todo;

    constructor(
        private _todosService: TodosService
    ) { }

    ngOnInit() {  }

    toggleDone() {
        this.todo.done = !this.todo.done;
        this._todosService.patch(this.todo);
    }
    
    onRemove() {
        this._todosService.remove(this.todo.id);
    }
}