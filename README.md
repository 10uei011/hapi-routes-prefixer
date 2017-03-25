# hapi-routes-prefixer

A simple plugin to prefix routes with strings such as '/v1' or '/api'.

## Why?

When we want to apply prefix 	to individual route plugins but not to all of the
plugins registered with the server object.

## Installation

```bash
npm install --save hapi-routes-prefixer 
```

## Usage

After installing register the module as a plugin.

```js
var Hapi = require('hapi')
var server = new Hapi.Server()
var prefixer = require('hapi-routes-prefixer')

server.connection({ port: 3000, host: localhost})

server.register([
{
	register: prefixer
}, 
{
	register: 'some other plugin'
},
function (err) {
	if (err) {
		console.log('Failed to load plugin:', err)
	}

	server.start(function (err) {
    if (err) {
      throw err
    }
    	console.log(Server running at: ', server.info.uri)
    })
}])

```

After registering the plugin, use it in your routes like this.

```js
exports.register = function (server, option, next) {

  var route = server.routePrefix('/api')

  route([
    {
      method: 'GET',
      path: '/users/{id}',
      handler: function (request, reply) {
      }
    },
    {
      method: 'POST',
      path: '/users',
      handler: function (request, reply) {
      	reply('created user')
      }
    },
  ]);

  next()
};

exports.register.attributes = {
  name: 'api.user',
  version: '1.0.0'
}
```
The above routes can be accessed at 'domain.com/api/users' now.


