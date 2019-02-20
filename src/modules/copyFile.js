const path = require('path');
const fs = require('fs');

const existFolder = require('./existFolder');

const copyFile = link => {
  const output = path.normalize('../output');

  existFolder(output);

  const nameFolder = path.join(output, path.parse(link).name.slice(0, 1));

  existFolder(nameFolder);

  //  копируем
  const rs = fs.createReadStream(link);
  const ws = fs.createWriteStream(path.join(nameFolder, path.parse(link).base));
  rs.pipe(ws);
};

module.exports = copyFile;
