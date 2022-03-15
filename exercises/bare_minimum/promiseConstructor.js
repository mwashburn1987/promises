/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  // create new promise

  let promise = new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, fileData) => {
      if ( err ) {
        reject(err);
      } else {
        var data = fileData.toString().split('\n')[0];
        resolve(data);
      }
    });
  });
  return promise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  // create a new promise with the Promise constructor
  // Call request.get to get the status code
  // pass the status code into our resolve
  // pass any err into our reject
  // return promise
  let promise = new Promise((resolve, reject) => {
    request.get(url, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response.statusCode);
      }

    });
  });
  return promise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
