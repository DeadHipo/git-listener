###Get started
##Install
Install the module with:
`
npm install git-listener
`

##Use

```js
//index.js

var Git = require('git-listener');

var git = new Git({
	port: PORT_NUMBER, //Port for webhook
	branch: 'master', //Branch for clone
	name: 'name-of', //Project and path name 
	clonePath: '/path/to', //Path where the project will be cloned. Full path let looks like /path/to/name-of
	repo: 'git@name.com:user/name-of.git' //SSH clone
});

//Data from stderr and stdout
git.on('done', function(msg) {
	console.log(msg);
})
.on('error', function(error) {
	console.log(error);
});
```

###Hook
Make sure that you have added webhook in your git setup **http:hostname.ru:port** and run **index.js**.
For example using **forever**.
`forever start index.js`

##P.S
If the specified path is not a have project directory, it will clone otherwise it will be renewed.
To restart the project useful **nodemon** or other similar modules.