const http = require('http');
const chalk = require('chalk');
const path = require('path');
const conf = require('./config/defaultConfig');
const route = require('./helper/route');
const openUrl = require('./helper/openUrl');
const imageRoute = require('./helper/imageRouter');

class Server {
  constructor(config){
    this.conf = Object.assign({},conf,config);
  }
  start(){
    const server = http.createServer((req, res) => {

      if(req.url.indexOf('showImage?type=') > -1){
        imageRoute(req, res)
      }else if (req.url.indexOf('favicon.ico') > -1){
        return;
      }
      else{
        const filePath = path.join(this.conf.root, req.url);
        route(req,res,filePath,this.conf);
      }

    });

	// 删除掉this.conf.hostname让其再localhost和ip都可以监听
    server.listen(this.conf.port, () => {
      const addr = `http://${this.conf.hostname}:${this.conf.port}`;
      console.info(`Server started at ${chalk.green(addr)}`);
      openUrl(addr);
    })
  }
}


module.exports = Server;
