var express =  require("express");
var server = express();
var bodyParser = require("body-parser");
var port = 8090;
server.set('port', port);

server.use(bodyParser.json());

var annealRoutes = require('./routes/anneal.js');
var greedyRoutes = require('./routes/greedy.js');
var repGreedyRoutes = require('./routes/repGreedy.js');
server.use(annealRoutes);
server.use(greedyRoutes);
server.use(repGreedyRoutes);


server.listen(server.get('port'), function(){
   console.log("Now listening to server"); 
});