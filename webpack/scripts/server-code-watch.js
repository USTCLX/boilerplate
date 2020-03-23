const webpack = require('webpack');
const config = require('../webpack.server.config');
const constantCode = require('./constant');

config.mode = 'development';
const compiler = webpack(config);

const watchng = compiler.watch(
  {
    aggregateTimeout: 300,
    ignored: /node_modules/,
    poll: 2000,
  },
  (err, stats) => {
    let json = stats.toJson('minimal');
    if (json.errors) {
      json.errors.forEach((item) => {
        console.log(item);
      });
    }
    if (json.warnings) {
      json.warnings.forEach((item) => {
        console.log(item);
      });
    }

    console.log(constantCode.SERVERCODECOMPLETED);
  }
);

compiler.hooks.done.tap('done', function (data) {
  console.log('\n svr code done');
});

process.stdin.on('data', function (data) {
  if (data.toString() === 'exit') {
    process.exit();
  }
});
