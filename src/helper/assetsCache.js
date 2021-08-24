const path = require('path');
const mimeTypeDeclareArr = require('./mimTypeDeclare');

// 缓存icon原始路径
function AssetsCache(){}

AssetsCache.prototype.mimeType = function(){
  const mimeTypeIcon = {}

for(let key in mimeTypeDeclareArr){
  let currObj = mimeTypeDeclareArr[key];
  mimeTypeIcon[key] = path.join(__dirname,currObj['icon']);
}

  return mimeTypeIcon;
}

module.exports = AssetsCache;
