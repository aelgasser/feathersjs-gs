import * as feathers from 'feathers';
import { Todos } from './todos';
import * as bodyParser from 'body-parser';
import * as path from 'path';

let app = feathers();
let serveClient = path.join(__dirname + '/../client');
let todosFolder = path.join(serveClient + '/app/todos');
let serveNodeModules = path.join(__dirname + '/../node_modules');

app.configure(feathers.rest())
    .configure(feathers.socketio())
    .use(bodyParser.json())
    .use('/', feathers.static(serveClient))
    .use('/todos', feathers.static(serveClient))
    .use('/todosController', new Todos())
    .use('/node_modules', feathers.static(serveNodeModules));

// app.service('todosController').create({
//     text: 'Server Todo'
// });


app.listen(3000);