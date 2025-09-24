import { app } from "./app";
import config from "./config";
import { Server } from "http";
let server: Server;

async function main() {
  server = app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
}
main();
process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error", err);
  process.exit(1); //mandatory (as per the Node.js docs)
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);

  if (server) {
    server.close(() => {
      console.info("Server closed!");
    });
  }
  process.exit(1);
});
