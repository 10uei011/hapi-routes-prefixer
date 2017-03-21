# hapi-routes-prefixer

Hapi-routes-prefixer is a simple plugin which allows us to prefix routes with strings such as "/api" or "/v0"


## Quickstart

```
 	npm install --save hapi-routes-prefixer 

```

Then register the module as a plugin.

```
	var Hapi = require('hapi');
	var server = new Hapi.Server();
	var prefixer = require('hapi-routes-prefixer');

	server.connection({ port: 3000, host: localhost});

	server.register([
	{
		register: prefixer
	}, 
	{
		register: 'some other plugin'
	},
	function (err) {
		if (err) {
			console.log('Failed to load plugin:', err);
		}

		server.start(function (err) {
	    if (err) {
	        throw err;
	    }
	    	console.log(Server running at: ', server.info.uri);
		});
	}]);

```

After registering the plugin, use it in your routes like this.

```
	exports.register = function (server, option, next) {

	    const route = server.routePrefix('/api');

	    route([
	        {
	            method: 'GET',
	            path: '/user/{id}',
	            handler: function (request, reply) {
	            	reply('done');
	            }
	        }
	    ]);

	    next();
	};

	exports.register.attributes = {
	    name: 'api.user',
	    version: '1.0.0'
	};

```

Each one of the routes in the above plugin will be prefixed with '/api'.


