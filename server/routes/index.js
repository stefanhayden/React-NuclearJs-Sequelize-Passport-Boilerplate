import fs from 'fs';
const validFileTypes = ['js'];
 
var requireFiles = function (directory, app, serverDir) {
  fs.readdirSync(directory).forEach(function (fileName) {
    // Recurse if directory
    if(fs.lstatSync(directory + '/' + fileName).isDirectory()) {
      requireFiles(directory + '/' + fileName, app, serverDir);
    } else {
 
      // Skip this file
      if(fileName === 'index.js' && directory === __dirname) return;
 
      // Skip unknown filetypes
      if(validFileTypes.indexOf(fileName.split('.').pop()) === -1) return;
 
      // Require the file.
      require(directory + '/' + fileName)(app, serverDir);
    }
  })
}
 
module.exports = function (app, serverDir) {
  requireFiles(__dirname, app, serverDir);
}
