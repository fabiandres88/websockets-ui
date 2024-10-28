import WebSocket, { WebSocketServer } from "ws";
import { handleConnection } from "./controllers/game";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const wss = new WebSocketServer({ port: Number(PORT) });

wss.on("connection", (ws) => {
  console.log("New player connected");
  handleConnection(ws);
});

wss.on("listening", () => {
  console.log(`WebSocket server started on ws://localhost:${PORT}`);
});
