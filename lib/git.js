var express = require('express');
var execFile = require('child_process').execFile;
var util = require('util');

var EventEmitter = require('events').EventEmitter;

var Git = function(options) {
	var this1 = this;
	
	if (!options.port || !options.branch || !options.clonePath || !options.repo || !options.name) throw new Error('Options not fully');
	this1.options = options;



	this1.app = express();
	this1.app.post('/', function(req, res) {
		this1.deploy();
		res.end();
	});

	this1.app.listen(this1.options.port, function() {
		console.log(`Server listen ${this1.options.port} port`);
	});

	EventEmitter.call(this1);
}

Git.prototype.options = {}
Git.prototype.app = {}

Git.prototype.deploy = function() {
	var this1 = this;

    execFile(`${__dirname}/script.sh`, [this1.options.repo, this1.options.clonePath, this1.options.name, this1.options.branch], function(error, stdout, stderr) {
    	if (error) this1.emit('error', error);
    	if (stderr) this1.emit('error', stderr);
    	if (stdout) this1.emit('done', stdout);
    });
}

util.inherits(Git, EventEmitter);

var create = function(options) {
	return new Git(options);
}


module.exports = create;