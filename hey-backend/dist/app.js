"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const connect_1 = __importDefault(require("./database/connect"));
const auth_router_1 = __importDefault(require("./modules/auth/auth.router"));
class App {
    constructor(controllers, port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.initializeDataBase();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
        this.initializeRouter();
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
    }
    initializeErrorHandling() {
        this.app.use(error_middleware_1.default);
    }
    initializeControllers(controllers) {
        this.app.get("/", (request, response) => {
            response.send("Application is running");
        });
        controllers.forEach((controller) => {
            this.app.use("/", controller.router);
        });
    }
    initializeDataBase() {
        (0, connect_1.default)();
    }
    initializeRouter() {
        this.app.get('/', (req, res) => {
            res.send("Hello World!");
        });
        this.app.use('/v1/auth', auth_router_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.default = App;
