const yargs = require('yargs');
const Server = require('./app');
/* eslint-disable */
const argv = yargs
.usage('anyentry[options]')
.option('p',{
  alias:'port',
  describe:'端口',
  default:9527
})
.option('h',{
  alias:'hostname',
  describe:'host',
  default:'127.0.0.1'
})
.option('d',{
  alias:'root',
  default:'root path',
  default:process.cwd()
})
.version()
.alias('v','version')
.help()
.argv;
/* eslint-enable */
const server = new Server(argv);

server.start();
