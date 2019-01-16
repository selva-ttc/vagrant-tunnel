var app = require('express')();
var bodyParser = require('body-parser');
var rp = require('request-promise');
var localtunnel = require('localtunnel');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var port = process.env.PORT || 8080;
// var proxyUrl = process.env.PROXY_URL || function(){console.error("Missing env: PROXY_URL");process.exit(1)}();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.all('/*', function(req, res) {
    res.json({status: "ok"})
    // var options = {
    //     method: req.method,
    //     uri: proxyUrl + req.path,
    //     body: req.body,
    //     rejectUnauthorized: false,
    //     json: true,
    //     resolveWithFullResponse: true
    // };
    // rp(options)
    // .then(function (response) {
    //     res.set('Content-Type', response.headers['content-type']);
    //     res.send(response.body)
    // })
    // .catch(function (err) {
    //     console.log(err.name)
    //     res.json(err)
    // });
});

app.listen(port, function() {
    console.log(`Tunneling app listening on port ${port}!`);
});
