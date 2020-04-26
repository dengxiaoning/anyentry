const path = require('path');
const mimeTypes = require('./mimTypeDeclare');

/**
 * 根据文件获取文件类型
 */
module.exports = (filePath) => {
  let ext = path.extname(filePath)
    .split('.')
    .pop()
    .toLowerCase();
  if (!ext) {
    ext = filePath;
  }
  return mimeTypes[ext] || mimeTypes['txt'];
}
