'use strict';

const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server();
server.connection({ port: 80 });

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
