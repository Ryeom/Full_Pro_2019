var net = require('net');
var sockets=[];

var server = net.createServer(function(client) {
   // client.setEncoding('utf-8');
    client.setTimeout(1000);
    client.setEncoding('utf8');

    sockets.push(client);    
    client.on('data', function (data) {

        console.log('data : ' + data );
        // 서버는 클라이언트에 클라이언트 net.socket객체를 사용하여 데이터를 반환쓰
        //client.end('Server received data : ' + data);
        //client.end('Server received data : ' + data + ', send back to client data size : ' + client.bytesWritten);
        dataMap=JSON.stringify({
            'aaa':data});
      
        for(var i = 0 ; i < sockets.length; i++){
            sockets[i].write(data);
       }
       // sockets[0].write("테스트");
        console.log("보냄?:"+data);
    })    

    client.on('error',function (data){
        console.log('error 걸려따'+data);
    })

    client.on('end', function () {
        console.log('Client disconnect.');
        sockets.pop;
    })

    client.on('timeout', function () {
        //console.log('Client request time out. ');
    })

    //client.write('welcome nodejs');

});

//서버를 포트 2222에서 수신하는 tcp서버로 만든다
server.listen(2222, function () {

    //서버 주소 정보를 얻는다
    var serverInfo = server.address();

    var serverInfoJson = JSON.stringify(serverInfo);
    console.log('TCP server가 주소 리슨해영 : ' + serverInfoJson);
    server.on('close', function () {
        console.log('TCP server socket이 닫혀있어영.');
    });
    server.on('error', function (error) {       //오류
        console.error(JSON.stringify(error));
    });

});