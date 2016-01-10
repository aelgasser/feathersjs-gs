var feathers = require('feathers');
var todos_1 = require('./todos');
var bodyParser = require('body-parser');
var path = require('path');
var app = feathers();
var serveClient = path.join(__dirname + '/../client');
var serveNodeModules = path.join(__dirname + '/../node_modules');
app.configure(feathers.rest())
    .configure(feathers.socketio())
    .use(bodyParser.json())
    .use('/todos', new todos_1.Todos())
    .use('/', feathers.static(serveClient))
    .use('/node_modules', feathers.static(serveNodeModules));
app.service('todos').create({
    text: 'Server Todo'
});
app.listen(3000);
//# sourceMappingURL=main.js.map