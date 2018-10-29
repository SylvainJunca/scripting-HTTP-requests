var https = require('https');   
var buff = '';

function getAndPrintHTML (options) {

  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      buff += (data + '\n');
    });
    response.on('end', function() {
      console.log(buff + '\nResponse stream complete.');
    });
  })
};
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);

