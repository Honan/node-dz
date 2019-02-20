const fs = require('fs');

const existFolder = link => {
  if (!fs.existsSync(link)) { // если нет папки, то создаем ее
    fs.mkdirSync(link);
  }
};

module.exports = existFolder;
