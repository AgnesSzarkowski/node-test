//console.log('Hello world, nodejs');
var http = require('http')
var port = process.env.PORT || 3000;
var host = process.env.HOST || '0.0.0.0';

var fs    = require('fs'),
    nconf = require('nconf');

//
// Setup nconf to use (in-order):
//   1. Command-line arguments
//   2. Environment variables
//   3. A file located at 'path/to/config.json'
//
nconf.argv()
    .env()
//    .file({ file: 'path/to/config.json' });

//
// Set a few variables on `nconf`.
//
nconf.set('database:host', '127.0.0.1');
nconf.set('database:port', 5984);

//
// Get the entire database object from nconf. This will output
// { host: '127.0.0.1', port: 5984 }
//



http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World from NodeJs\n');
    res.write('foo: ' + nconf.get('foo'));
    res.write('NODE_ENV: ' + nconf.get('NODE_ENV'));
    res.write('database: ' + nconf.get('database'));
    res.write('setting1: ' + nconf.get('setting1'));
    res.write('setting2: ' + nconf.get('setting2'));
    res.end('bye!\n');
}).listen(port, host);
console.log("Server running at "+host+":"+port);
