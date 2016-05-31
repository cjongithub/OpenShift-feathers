'use strict';

const app = require('./app');
//const port = app.get('port');
const ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
const port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const server = app.listen(port, ipaddress);

server.on('listening', () =>
  console.log(`Feathers application started on ${app.get('host')}:${port}`)
);