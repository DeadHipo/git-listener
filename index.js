module.exports = require('./lib/git');

var Git = require('./lib/git');

var git = new Git({
	port: 2121,
	branch: 'master',
	clonePath: '/Users/nearlydeadhipo/Dropbox/NODE.JS Workspace',
	name: 'git-test',
	repo: 'git@github.com:DeadHipo/git-test.git'
});

git.on('done', function(msg) {
	console.log(msg);
})
.on('error', function(error) {
	console.log(error);
});