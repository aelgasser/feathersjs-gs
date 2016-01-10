import * as feathers from 'feathers';
import { Todos } from './todos';
import * as bodyParser from 'body-parser';
import * as path from 'path';

let app = feathers();
let serveClient = path.join(__dirname + '/../client');
let serveNodeModules = path.join(__dirname + '/../node_modules');

app.configure(feathers.rest())
    .configure(feathers.socketio())
    .use(bodyParser.json())
    .use('/todos', new Todos())
    .use('/', feathers.static(serveClient))
    .use('/node_modules', feathers.static(serveNodeModules));

app.service('todos').create({
    text: 'Server Todo'
});


app.listen(3000);