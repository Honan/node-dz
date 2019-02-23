const path = require('path');
const fs = require('fs');
const copyFile = require('./modules/copyFile');

const getFiles = (pathFile) => {
  return new Promise((resolve, reject) => {
    fs.readdir(pathFile, (err, files) => {
      if (err) reject(err);
      else {
        files.forEach(item => {
          let localBase = path.join(pathFile, item);
          fs.stat(localBase, (err, stats) => {
            if (err) reject(err);
            if (stats.isDirectory()) {
              getFiles(localBase);
            } else {
              copyFile(localBase);
            }
          });
        });
      }
      resolve('Файлы отсортированы');
    });
  });
};

const base = path.normalize('../input');

getFiles(base)
  .then(message => {
    console.log(message);
  })
  .catch(e => {
    console.log(e);
  });
