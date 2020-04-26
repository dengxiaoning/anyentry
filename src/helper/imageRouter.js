const fs = require('fs');
const AssetsCache = require('./AssetsCache');
const assetsCacheChild = new AssetsCache()

module.exports = function showImage(req, res){
  let urlParams = req.url;
  urlParams = urlParams.split('?type=')[1];
    readImg(assetsCacheChild.mimeType()[urlParams],res);
}

const readImg = function(path,res){
  fs.readFile(path,'binary',function(err,  file)  {
      if  (err)  {
          console.error(err);
          return;
      }else{
              res.write(file,'binary');
              res.end();
      }
  });
}
