const proConfig = require('../../src/share/pro-config');

const nodeServerPort = proConfig.nodeServerPort;

require('./free-port')(nodeServerPort);

require('../../dist/server/app');
