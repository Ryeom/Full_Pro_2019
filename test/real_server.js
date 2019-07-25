var net = require('net'),
    sockets = [];

var server = net.createServer(function (client) {
    client.setEncoding('utf8');
    client.setTimeout(500);
    client.on('data', function (data) {
        for (var i = 0; i < sockets.length; i++) {
            sockets[i].write(data);
        }
    });
    // client.on('end', function () {
    //     console.log(' end ㅂㅂ.');
    // });
    client.on('error', function () {
        //console.log(`error`);
    });
    client.on('close', function () {
        sockets.pop();
        console.log(' close ㅂㅂ');
    });
    client.on('timeout', function () {});
    client.write('hihi');
    sockets.push(client);
});

server.on('error', function (error) {

});
server.listen(2222, function () {

    var serverInfo = server.address();
    var serverInfoJson = JSON.stringify(serverInfo);
    console.log('listen server : ' + serverInfoJson);
    server.on('close', function () {
        console.log('server closed.');
    });
    server.on('connection', function () {
        console.log(`누가드르와따`);
    });
});
