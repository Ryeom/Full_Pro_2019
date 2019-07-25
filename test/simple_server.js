var net = require('net');

var server = net.createServer(function(client) {
    //console.log(Json.stringify(this));
    client.setEncoding('utf-8');

    client.on('data', function (data) {
       // console.log('데이타 온거 함 보자 마 : ' + data );
        console.log(JSON.stringify(this));
        // 서버는 클라이언트에 클라이언트 net.socket객체를 사용하여 데이터를 반환쓰
    })
    client.on('error',function (data){
        
        console.log('에라 걸려따 : '+data);
    })
    client.on('end', function () {
        console.log('클라이언트 ㅃ2');
    })
    client.on('timeout', function () {
        console.log('잠깐 쉬자요');
    })
    //this.on('',);
});

//서버를 포트 2222에서 수신하는 tcp서버로 만든다
server.listen(2222, function () {
    var serverInfo = server.address();
    server.maxConnections = 2;
    console.log(`서버 열림 address : ${serverInfo.address} port : ${serverInfo.port} max : ${server.maxConnections}`);
    console.log(JSON.stringify(this));
    //서버 주소 정보를 얻는다

    server.on('close', function () {
        console.log(JSON.stringify(this));
        console.log('소켓 닫힘.');
    });
    server.on('error', function (error) {
        console.error(JSON.stringify(error));
    });
});



    