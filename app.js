var express = require('express');
var app = express();
var request = require('request');

app.get("/test.mp3", function(req, res, next) {
  var audio = request.get('http://az592690.vo.msecnd.net/media/channels/varvet/acasts/verket-4-olofwretling-vinterip1/SE/STOCKHOLMSLAN/ALL/varvet-verket-4-olofwretling-vinterip1.mp3?ts=1448627427703');
  audio.on('data', function(chunk) {
    res.write(chunk);
  });

  audio.on('end', function() {
    res.send();
  });

    res.writeHead(200, {
    'Content-Length': 34852688,
    'Content-Type': 'audio/mpeg',
    'Cache-Control': 'public, max-age=86400, s-max-age=86400'
  });
});

app.set('port', process.env.PORT || 3020);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});