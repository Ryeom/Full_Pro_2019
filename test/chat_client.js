var net = require('net');
var HOST = 'localhost';
var PORT = 2222;
var client = new net.Socket();
 


    var client = net.connect({port: 2222,host:'localhost'},function(){

        this.setTimeout(500);
        this.setEncoding('utf-8');

        this.on('data',function(data){


        })
    });

