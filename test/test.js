const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  // Simulate sending real-time facial animation data
  setInterval(() => {
    const animationData = { /* Your animation data here */ };
    ws.send(JSON.stringify(animationData));
  }, 1000 / 60); // 60 FPS
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
