import config from '3lib-config';
import { Server } from "socket.io";

config.init();

const io = new Server({
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  socket.onAny((ev, message) => {
    console.log(ev, message);
    socket.broadcast.emit(ev, message);
  })
});

let port = 3000;
if (config.get().port) {
  port = config.get().port;
}

io.listen(port);

console.log("Server started on port", port);
