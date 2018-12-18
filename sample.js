var rp = require('request-promise');
var options = {
    method: 'GET',
    uri: 'https://connect.talemetry.dev/chat/test',
    rejectUnauthorized: false,
    resolveWithFullResponse: true
};
rp(options)
.then(function (response) {
    //console.log(response.headers['content-type'])
    console.log(response.headers['content-type'])
    //res.set('Content-Type', response.headers['content-type']);
})
.catch(function (err) {
    console.log(err)
});
