var http = require('http')

http.createServer(function(rec, res){
    res.end("eai mano")
}).listen(8081);

console.log("O servidor funciona!")