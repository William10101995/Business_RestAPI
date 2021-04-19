//Import Express
import express from "express";
//Import Config
import config from "./config";
//Import MiddleWare
import * as middleware from "./Middlewares/middlewares";
//Import Routes
import businessRoutes from "../src/routers/business.routes";
//Import Database
import * as db from "./database/database.connection";

//Metodh Express
const app = express();

//Settings
app.set("port", config.PORT);

//Database Connection
db.default.connections();

//MiddleWares
app.use(middleware.getMorgan);

//Routers
app.use(businessRoutes);

export default app;
