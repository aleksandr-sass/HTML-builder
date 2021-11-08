const fs = require('fs');
const path = require('path');

const pathToDir = path.join(__dirname, 'secret-folder');

fs.readdir(pathToDir, {encoding: 'utf-8', withFileTypes: true}, (err, files) => {
  if (err) {
    console.error('Error', err.message);
  } else {
    for (const file of files) 
      if (file.isFile()) {
        let pathToFile = path.join(pathToDir, file.name);
        let fileParse = path.parse(pathToFile);
        let fileExt = fileParse.ext.slice(1);
        let fileSize = 100;
        fs.stat(pathToFile, (err, stats) => {
          if (err) {
            console.error('Error', err.message);
          } else {
            console.log(`${fileParse.name} - ${fileExt} - ${stats.size}`);
          };
        });
      };
  }
});