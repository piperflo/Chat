const express = require('express');
var app = express();

app.use(express.static('public'));

const http = require('http');
const server = http.createServer(app);

const socket = require('socket.io');
const io = new socket.Server(server);


var state = {
    "General": [],
    "Announcements": [],
    "School": [],
    "Life": [],
  }

  function handleMessage(msg) {
    state[msg.room].push({
      name: msg.name,
      date: msg.date,
      content: msg.content
    });
    io.emit('message', msg);
  }
  
  
  io.on('connection', (socket) => {
    // attach the event listener to the user's socket
    socket.on('message', handleMessage);
    // send the current state to the user
    socket.emit('update-state', state);
  });

io.on('connection', (socket) => {
  console.log('a user connected');
});






const port = 3000;
server.listen(port, () => console.log(`listening on port ${port}`));
