import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { FeathersTodoComponent } from './feathers-todo.component';

bootstrap(FeathersTodoComponent, [
    ROUTER_PROVIDERS
]);