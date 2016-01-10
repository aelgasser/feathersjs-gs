import { bootstrap } from 'angular2/platform/browser';
import { FeathersTodoComponent } from './feathers-todo.component';
import { TodosService } from './todos/todos.service';

bootstrap(FeathersTodoComponent, [
    TodosService
]);