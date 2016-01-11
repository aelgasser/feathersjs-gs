var feathers = require('feathers');
var todos_1 = require('./todos');
var bodyParser = require('body-parser');
var path = require('path');
var app = feathers();
var serveClient = path.join(__dirname + '/../client');
var todosFolder = path.join(serveClient + '/app/todos');
var serveNodeModules = path.join(__dirname + '/../node_modules');
app.configure(feathers.rest())
    .configure(feathers.socketio())
    .use(bodyParser.json())
    .use('/', feathers.static(serveClient))
    .use('/todos', feathers.static(serveClient))
    .use('/todosController', new todos_1.Todos())
    .use('/node_modules', feathers.static(serveNodeModules));
// app.service('todosController').create({
//     text: 'Server Todo'
// });
app.listen(3000);
//# sourceMappingURL=main.js.map