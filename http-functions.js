var https = require('https');   
var buff = '';

module.exports = function getHTML (options, callback) {

    https.get(options, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
          buff += (data + '\n');
        });
        response.on('end', function () {
            return callback(buff);
        });
  });
};  
   

