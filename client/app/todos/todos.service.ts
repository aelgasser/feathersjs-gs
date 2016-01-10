import { Injectable } from 'angular2/core';
import { Todo } from './todo';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class TodosService {
    private _socket: SocketIOClient.Socket;
    private _app: any;
    private _todoSocket: any;
    public todosSubject: Rx.Subject<Todo[]>;

    constructor(
    ) {
        this._socket = io();
        this._app = feathers().configure(feathers.socketio(this._socket));
        this._todoSocket = this._app.service('todos');
        this.todosSubject = new Rx.Subject();
    }

    getTodos() {
        this._todoSocket.find((error, todos) => {
            this.todosSubject.next(todos);
        });
    }

    socketListenOnCreate() {
        this._todoSocket.on('created', (todo) => {
            this.getTodos();
        });
    }
}