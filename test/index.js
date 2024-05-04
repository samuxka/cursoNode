const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao site!")
})

app.get("/sobre", function(req, res){
    res.send("Pagina sobre")
})

app.get("/blog", function(req, res){
    res.send("Pagina Blog")
})

app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081")
});