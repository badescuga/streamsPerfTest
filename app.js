var express = require('express');
var app = express();
var request = require('request');
var util = require('util');

app.get("/test.mp3", function (req, res, next) {
  // console.log("REQ ----------------------");
  // console.log("REQ PARAMS: " + JSON.stringify(req.params));
  // console.log("REQ PROTOCOL: " + req.protocol);
  // console.log("REQ ISFRESH: " + req.fresh);
  // console.log("REQ ISSTALE: " + req.stale);
  // console.log("REQ HEADERS: " + JSON.stringify(req.headers));

  console.log("--------- res headers: "+util.inspect(res));

  var audio = request.get('http://az592690.vo.msecnd.net/media/channels/varvet/acasts/verket-4-olofwretling-vinterip1/SE/STOCKHOLMSLAN/ALL/varvet-verket-4-olofwretling-vinterip1.mp3?ts=1448627427703');
  audio.on('data', function (chunk) {
    res.write(chunk);
  });

  audio.on('end', function () {
    res.send();
  });


  res.writeHead(200, {
    //    'Content-Length': 34852688,
    'Content-Type': 'audio/mpeg',
    'Test-Header-Badescuga': 'somevalue',
    'Cache-Control': 'public, max-age=86400, s-max-age=86400'
  });
});

app.get("/test-cl.mp3", function (req, res, next) {
  //  console.log("REQ WITH CL ----------------------");
  // console.log("REQ PARAMS: " + JSON.stringify(req.params));
  // console.log("REQ PROTOCOL: " + req.protocol);
  // console.log("REQ ISFRESH: " + req.fresh);
  // console.log("REQ ISSTALE: " + req.stale);
  // console.log("REQ HEADERS: " + JSON.stringify(req.headers));

  var audio = request.get('http://az592690.vo.msecnd.net/media/channels/varvet/acasts/verket-4-olofwretling-vinterip1/SE/STOCKHOLMSLAN/ALL/varvet-verket-4-olofwretling-vinterip1.mp3?ts=1448627427703');
  audio.on('data', function (chunk) {
    res.write(chunk);
  });

  audio.on('end', function () {
    res.send();
  });

  res.writeHead(200, {
    'Content-Length': 34852688,
    'Content-Type': 'audio/mpeg',
    'Cache-Control': 'public, max-age=86400, s-max-age=86400'
  });
});

app.set('port', process.env.PORT || 3020);

var server = app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + server.address().port);
});