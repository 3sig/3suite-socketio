import config from '3lib-config';
import { Server } from "socket.io";

config.init();

const verbose = config.get("verbose", false);
const silent = config.get("silent", false) || verbose;

const io = new Server({
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
  allowEIO3: true
});

if (verbose) {
  console.log("Socket.IO server initialized with config:", {
    cors: { origin: "*", methods: ["GET", "POST"] },
    allowEIO3: true
  });
}

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);

  if (verbose) {
    console.log("Connection details:", {
      id: socket.id,
      address: socket.handshake.address,
      headers: socket.handshake.headers,
      query: socket.handshake.query,
      time: new Date().toISOString()
    });
  }

  socket.on("disconnect", (reason) => {
    console.log(`Client disconnected: ${socket.id} (${reason})`);

    if (verbose) {
      console.log("Disconnect details:", {
        id: socket.id,
        reason: reason,
        time: new Date().toISOString()
      });
    }
  });

  socket.onAny((event, ...args) => {
    if (!silent) {
      console.log(`Event received: ${event} from ${socket.id}`);
    }

    if (verbose) {
      console.log("Event details:", {
        event: event,
        args: args,
        from: socket.id,
        time: new Date().toISOString(),
        clientCount: io.engine.clientsCount
      });
    }

    socket.broadcast.emit(event, ...args);

    if (verbose) {
      console.log(`Event broadcast: ${event} to ${io.engine.clientsCount - 1} clients`);
    }
  });
});

const port = config.get("port", 3000);

io.listen(port);

console.log(`Socket.IO server started on port ${port}`);

if (verbose) {
  console.log("Server configuration:", {
    port: port,
    silent: silent,
    verbose: verbose,
    timestamp: new Date().toISOString()
  });
}
