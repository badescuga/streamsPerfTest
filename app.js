var express = require('express');
var app = express();
var request = require('request');

app.get("/test.mp3", function(req, res, next) {
  var audio = request.get('https://acastprod.blob.core.windows.net/media/common/Acast%20logga%2013%20IN%20v2%20320kbpsLevel.mp3');
  audio.on('data', function(chunk) {
    res.write(chunk);
  });

  audio.on('end', function() {
    res.send();
  });

  res.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'Cache-Control': 'public, max-age=86400, s-max-age=86400'
  });
});

app.set('port', process.env.PORT || 3020);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});