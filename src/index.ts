import cors from "cors";
import express from "express";
import "dotenv/config";

class App {
  private server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
  }

  private middleware(): void {
    this.server.use(cors());
    this.server.use(express.json());
  }

  initialize(): void {
    const { PORT } = process.env;
    this.server.listen(PORT, () => console.log(`Server on ${PORT} ✌️`));
  }
}

export { App };
