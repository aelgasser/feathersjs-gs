import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { FeathersTodoComponent } from './feathers-todo.component';
import { TodosService } from './todos/todos.service';

bootstrap(FeathersTodoComponent, [
    TodosService,
    ROUTER_PROVIDERS
]);