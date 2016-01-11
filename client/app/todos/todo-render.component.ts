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

    ngOnInit() {
        // this._todosService.currentTodo.subscribe(
        //     todo => { console.log(todo); },
        //     err => console.log(err)
        // );
        // this._todosService.getTodo(this.todo.id);
        // this._todosService.socketListenOnPatched(this.todo.id);
    }

    toggleDone() {
        this.todo.done = !this.todo.done;
        this._todosService.patch(this.todo);
    }
    
    onRemove() {
        this._todosService.remove(this.todo.id);
    }
}