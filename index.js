'use strict';

exports.register = register;
exports.register.attributes = {
    name: 'route-prefix-decorator',
    version: '1.0.0'
};

function register (server, options, next) {
    server.decorate('server', 'routePrefix', function (prefix) {
        var originalRoute = this.route;

        return function (options) {
            options = [].concat(options);

            for (var i = 0; i < options.length; ++i) {
                options[i].path = prefix + options[i].path;
            }

            return originalRoute.call(server, options);
        };
    });
    next();
}

