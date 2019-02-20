const path = require('path');
const fs = require('fs');
const copyFile = require('./modules/copyFile');

const base = path.normalize('../input');

const readDir = base => {
  const files = fs.readdirSync(base);

  files.forEach(item => {
    let localBase = path.join(base, item);
    let state = fs.statSync(localBase);
    if (state.isDirectory()) {
      readDir(localBase);
    } else {
      copyFile(localBase);
    }
  });
};

readDir(base, 0);
