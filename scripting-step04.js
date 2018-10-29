var https = require('https');   
var buff = '';

function getHTML (options, callback) {

    https.get(options, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
          buff += (data + '\n');
        });
        response.on('end', function () {
            return callback(buff);
        });

  
  });
}  
  
  function printHTML (html) {
    console.log(html);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  }

  getHTML(requestOptions, printHTML);