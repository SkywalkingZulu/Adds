const express = require('express');
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/public"));
const bodyParser = require('body-parser');
const server = app.listen(1337);
const io = require("socket.io")(server);
io.on('connection', function(socket){
    socket.on("client_data", function(data){
    var serverresponse = {
      "Name": data[0].value,
      "Location": data[1].value,
      "Language": data[2].value,
      "Comment": data[3].value,
      "Your lucky number emitted by the server is": Math.floor(Math.random()*(1000 - 1)+1)
    }
    socket.emit("clientdata",serverresponse);
    })
})