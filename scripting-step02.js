var https = require('https');   
var buff = '';
function getAndPrintHTMLChunks () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        buff += (data + '\n');
    });
    response.on('end', function() {
      console.log(buff + '\nResponse stream complete.');
    });
  })
}
getAndPrintHTMLChunks();