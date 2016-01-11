import { Injectable } from 'angular2/core';
import { Todo } from './todo';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class TodosService {
    private _socket: SocketIOClient.Socket;
    private _app: any;
    private _todoSocket: any;
    public todosSubject: Rx.Subject<Todo[]>;
    public currentTodo: Rx.Subject<Todo>;

    constructor(
    ) {
        this._socket = io();
        this._app = feathers().configure(feathers.socketio(this._socket));
        this._todoSocket = this._app.service('todosController');
        this.todosSubject = new Rx.Subject();
        this.currentTodo = new Rx.Subject();
    }

    getTodos() {
        this._todoSocket.find((error, todos: Todo[]) => {
            this.todosSubject.next(todos);
        });
    }

    getTodo(id: number) {
        this._todoSocket.get(id, {}, (err, todo: Todo) => {
            if (err) {
                console.log(err);
            } else {
                this.currentTodo.next(todo);
            }
        });
    }

    socketListenOnPatched(id: number) {
        this._todoSocket.on('patched', (todo: Todo) => {
            console.log('patched');
            this.getTodo(todo.id);
        });
    }

    socketListenOnCreate() {
        this._todoSocket.on('created', (todo: Todo) => {
            console.log('created');
            this.getTodos();
        });
    }

    create(text: string) {
        this._todoSocket.create({
            text: text
        });
    }

    patch(todo: Todo) {
        this._todoSocket.patch(todo.id, todo, {}, (err, todo: Todo) => {
            if (err) {
                console.log(err);
            } else {
                this.getTodo(todo.id);
            }
        });
    }
}