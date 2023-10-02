const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require('cors');

const app = express();
app.use(cors({origin: 'http://localhost:3000'}))
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: 'http://localhost:3000' });

io.on("connection", (socket) => {
  console.log("server connected");

  socket.on("beginPath", (args) => {
    socket.broadcast.emit("beginPath", args);
  });

  socket.on("drawLine", (args) => {
    socket.broadcast.emit("drawLine", args);
  });
});



httpServer.listen(5000);