const fs = require('fs');
const path = require('path');
// add html template
const Handlebars = require('handlebars');
// add sync promisify
const promisify = require('util').promisify;
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const config = require('../config/defaultConfig');
// add content-type
const mime = require('./mime');
// add compress
const compress = require('./compress');
const range = require('./range');
const isFresh = require('./cache');

// import template source
const tplPath = path.join(__dirname, '../template/dir.tpl');
const source = fs.readFileSync(tplPath);
const template = Handlebars.compile(source.toString())

module.exports = async function (req, res, filePath) {
  try {
    // Set it is sync reqest
    const stats = await stat(filePath);
    if (stats.isFile()) {
      const contentType = mime(filePath);

      res.setHeader('Content-Type', contentType['text']);

      if(isFresh(stats,req,res)){
        res.statusCode = 304;
        res.end();
        return;
      }
      let rs;
      const {code,start,end} = range(stats.size,req,res);
      if(code === 200){
        res.statusCode = 200;
        // crate read stream here.
        rs = fs.createReadStream(filePath);
      }else{
        res.statusCode = 206;
        rs = fs.createReadStream(filePath,{start,end});
      }
      // 压缩（before compress is 532b, after compress is 417b on browser in test）
      if (filePath.match(config.compress)) {
        rs = compress(rs, req, res)
      }
      rs.pipe(res);
    } else if (stats.isDirectory()) {
      // read folder from filepath
      const files = await readdir(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      const dir = path.relative(config.root, filePath);

      const data = {
        title: path.basename(filePath),
        dir: dir ? `/${dir}` : '',
        files: files.map(file => {
          // convert it to absolute path
          let eachUrl = path.join(filePath, file);
          let eachStat = fs.lstatSync(eachUrl);
          let iconUrl;
          if (eachStat.isDirectory()) { // If it's folder
            iconUrl = path.relative(config.root, 'src/assets/icons/folder.png');
          } else {
            iconUrl = path.relative(config.root, 'src/' + mime(file)['icon']);
          }

          return {
            file,
            icon: iconUrl ? `/${iconUrl}` : ''
          }

        })
      }
      res.end(template(data));
    }
  } catch (ex) {
    console.error(ex)
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${filePath} is not a directory or file`);
  }
}

