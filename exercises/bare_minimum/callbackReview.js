/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  //call fs.readfile(filepath, callback)
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      callback(err);
    } else {
      let firstLine = fileData.toString().split('\n')[0];
      callback(null, firstLine);
    }
  });
  //split data from readfile by (\n)
  // return first line?
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response.statusCode);
    }
  });

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
