'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at: ', server.info.uri);
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (req, res) {
    reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
  }
});
