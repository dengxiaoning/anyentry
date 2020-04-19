const path = require('path');

const mimeTypes = {
  "html": {
    "text": "text/html",
    "icon": "assets/icons/html.png"
  },
  "htm": {
    "text": "text/html",
    "icon": "assets/icons/html.png"
  },
  "txt": {
    "text": "text/plain",
    "icon": "assets/icons/file.png"
  },
  "doc": {
    "text": "application/msword",
    "icon": "assets/icons/WORD.png"
  },
  "docx": {
    "text": "application/msword",
    "icon": "assets/icons/WORD.png"
  },
  "pdf": {
    "text": "application/pdf",
    "icon": "assets/icons/Pdf.png"
  },
  "ppt": {
    "text": "application/vnd.ms-powerpoint",
    "icon": "assets/icons/ppt.png"
  },
  "dll": {
    "text": "application/octet-stream",
    "icon": "assets/icons/folder-config.png"
  },
  "xls": {
    "text": "application/vnd.ms-excel",
    "icon": "assets/icons/excel.png"
  },
  "exe": {
    "text": "application/octet-stream",
    "icon": "assets/icons/folder-config.png"
  },
  "js": {
    "text": "application/x-javascript",
    "icon": "assets/icons/js.png"
  },
  "json": {
    "text": "application/json",
    "icon": "assets/icons/JSON.png"
  },
  "mp3": {
    "text": "audio/mpeg",
    "icon": "assets/icons/MP3.png"
  },
  "bin": {
    "text": "application/octet-stream",
    "icon": "assets/icons/folder-config.png"
  },
  "class": {
    "text": "application/octet-stream",
    "icon": "assets/icons/folder-config.png"
  },
  "gif": {
    "text": "image/gif",
    "icon": "assets/icons/gif.png"
  },
  "ief": {
    "text": "image/ief",
    "icon": "assets/icons/image.png"
  },
  "jpeg": {
    "text": "image/jpeg",
    "icon": "assets/icons/image.png"
  },
  "jpg": {
    "text": "image/jpeg",
    "icon": "assets/icons/image.png"
  },
  "jpe": {
    "text": "image/jpeg",
    "icon": "assets/icons/image.png"
  },
  "png": {
    "text": "image/png",
    "icon": "assets/icons/image.png"
  },
  "tiff": {
    "text": "image/tiff",
    "icon": "assets/icons/tiff.png"
  },
  "tif": {
    "text": "image/tiff",
    "icon": "assets/icons/tiff.png"
  },
  "etx": {
    "text": "text/x-setext",
    "icon": "assets/icons/file.png"
  },
  "xsl": {
    "text": "text/xml",
    "icon": "assets/icons/xml.png"
  },
  "xml": {
    "text": "text/xml",
    "icon": "assets/icons/xml.png"
  },
  "css": {
    "text": "text/css",
    "icon": "assets/icons/CSS.png"
  },
  "mpeg": {
    "text": "video/mpeg",
    "icon": "assets/icons/video.png"
  },
  "mpg": {
    "text": "video/mpeg",
    "icon": "assets/icons/video.png"
  },
  "mpe": {
    "text": "video/mpeg",
    "icon": "assets/icons/video.png"
  },
  "qt": {
    "text": "video/quicktime",
    "icon": "assets/icons/video.png"
  },
  "mov": {
    "text": "video/quicktime",
    "icon": "assets/icons/video.png"
  },
  "mxu": {
    "text": "video/vnd.mpegurl",
    "icon": "assets/icons/video.png"
  },
  "avi": {
    "text": "video/x-msvideo",
    "icon": "assets/icons/video.png"
  },
  "movie": {
    "text": "video/x-sgi-movie",
    "icon": "assets/icons/video.png"
  }
}

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
