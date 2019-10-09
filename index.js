const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user is connected');

  socket.on('chat message', (message) => {
    io.emit('chat message', message)
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

http.listen(3000, () => {
  console.log('Listening on :3000');
});