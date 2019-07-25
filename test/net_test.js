var net = require('net');
//net module을 가져왔다. 안에 있는 함수를 사용하면 된다.

var net_server = net.createServer('option',function(){
    /*내용물
    TCP 서버를 생성한다.
    var net_server = net.createServer('option','connectionListener');
    connection Listener 매개변수는 자동으로 connection 이벤트의 리스너로 추가된다.
    */
});


var net_server = net.createServer('option','connectionListener');
var net_server = net.createServer('host','connectionListener');
var net_server = net.createServer('path','connectionListener');
//새로운 소켓 객체를 생성하고 해당위치에 소켓을 연다.
//소켓이 설정되면 connection이벤트가 발생하고 
//connection listener 매개변수는 connection이벤트에 대한 리스너로서 추가된다.

net_server.listen(port,host,backlog,callback);
net_server.listen(path,callback);
net_server.listen(handle,callback);
//서버가 시작되면 listening이벤트가 발생되고 callback 매개변수는 listening 이벤트에대한 리스너로서 추가됨.


net_server.close(callback);
//새로운 커넥션 연결을 중단하고 기존의 커넥션만 유지한다.
//그리고 모든 커넥션이 종료되었을 때 서버를 닫는다.
//서버는 'close'이벤트를 발생시키고 선택적으로 'close'를 받을수 있는 콜백을 매개변수로 정할 수 있다.

net_server.address();
//ip주소와 포트번호와 같은 서버정보를 운영체제로부터 가져온다.
//참고로 listening이벤트가 발생한 후에만 메소드 호출이 가능하다.

net_server.maxConnections = 2;
//서버에 연결되는 커넥션의 최대수를 정하는 프로퍼티
/*
저렇게 설정하고 포트를 열고 찍어보면
console.log(`서버 열림 address : ${serverInfo.address} port : ${serverInfo.port} max : ${server.maxConnections}`);
< 설정안했을경우
서버 열림 address : :: port : 2222 max : undefined
< 설정했을경우
서버 열림 address : :: port : 2222 max : 2
*/

console.log(net_server.connections);
//서버에 동시에 연결된 커넥션 수를 가지는 프로퍼티

net_server.on(event,listen);
//예제
net_server.on('listening',function(){ /* 내용물 */});
net_server.on('error',function(){ /* 내용물 */});
net_server.on('connection',function(){ /* 내용물 */});
net_server.on('close',function(){ /* 내용물 */});


var socket = [];

socket.connect(port,host,connectListener);
socket.connect(path,connectionListener);
//일반적으로 net.connect 래핑함수를 호출하여 소켓을 열기때문에
//사용자 정의 소켓을 구현해야 할 경우에만 사용
//connectListener매개변수는 connect이벤트에 대한 리스너로서 추가된다.

socket.bufferSize

socket.setEncoding('utf8')
//읽을 스트림으로 소켓에 대한 인코딩을 설정.

socket.write(data,encoding,callback);
//소켓에 데이터를 보낼 수 있는 메소드
//데이터의 기본 인코딩은 UTF8
//버퍼에 쌓인 데이터가 성공적으로 전송되었으면 true 반환
//buffer가 모두 비워졌을 경우에 drain이벤트가 발생한다.

socket.end(data,encoding);
//write 메소드와 기능은 같지만 일부 스트림만 종료하며 fin패킷을 보냄
//이때 서버가 일부 데이터를 보낼 수 있다. TCP half-close

socket.destroy()
//소켓의 i/o활동을 발생하지 않게하는 메소드
//에러 발생시 필요하다

socket.pause()
//데이터 읽기를 중지하며 data이벤트는 발생되지 않는다.

socket.resume()
//데이터 읽기를 재개

socket.setTimeout(timeout, callback);
/*
소켓에 설정된 초과시간이 지나면 timeout이벤트가 발생하며
callback매개변수는 timeout이벤트의 리스너로서 추가된다.
참고로 timeout 이벤트가 발생하여도 커넥션은 유지된다.
커넥션을 끊기 위해서는 사용자가 end메소드나 destroy메소드를 호출해야함.
*/

socket.setNoDelay(noDelay);

socket.setKeepAlive(enable,initialDelay);
//keep-Alive기능의 활성화 유무를 설정하는 메소드
//기본적으로 비활성화 되어있으며 지연시간을 설정할 수 있음

socket.address()
//ip주소와 포트번호와 같은 서버 정보를 운영체제로부터 가져온다.

socket.remoteAdress
//원격 ip주소를 가지는 프로퍼티

socket.remotePort
//원격 포트를 가지는 프로퍼티

socket.bytesRead
//소켓이 받은 총 바이트 수를 가지는 프로퍼티

socket.bytesWritten
//소켓에 보낸 총 바이트 수를 가지는 프로퍼티

socket.on(event,listener);

socket.on('connect',function(){ /* 내용물 */});     
socket.on('data',function(){ /* 내용물 */});
socket.on('end',function(){ /* 내용물 */});
socket.on('timeout',function(){ /* 내용물 */});
socket.on('error',function(){ /* 내용물 */});
socket.on('close',function(){ /* 내용물 */});


net.isIP(input)
//입력된 ip의 버전을 반환한다.

net.isIPv4(input)
//입력된 ip의 버전이 4일경우 true반환
net.isIPv6(input)
//입력된 ip의 버전이 6일경우 true반환

