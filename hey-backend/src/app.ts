import express from "express";
import errorMiddleware from "./middlewares/error.middleware";
import { BaseController } from "./base/base.controller";
import connectDB from "./database/connect";
import authRouter from "./modules/auth/auth.router";

class App {
  public app: express.Application;
  public port: number | string;

  constructor(controllers: BaseController[], port: number | string) {
    this.app = express();
    this.port = port;

    this.initializeDataBase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
    this.initializeRouter();
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeControllers(controllers: BaseController[]) {
    this.app.get("/", (request, response) => {
      response.send("Application is running");
    });
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  private initializeDataBase() {
    connectDB();
  }

  private initializeRouter() {
    this.app.get('/',(req, res) => {
      res.send("Hello World!")
    })
    this.app.use('/v1/auth', authRouter);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
