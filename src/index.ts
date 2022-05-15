import { json } from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import EMVC, { createRoutes } from "emvc-decorators";
import express from "express";
import path from 'path';
import APP_CONFIGS from './consts/configs';
import errorHandler from "./middlewares/errorHandler";
dotenv.config()

EMVC.config({
    controllers: path.resolve(__dirname, "./controllers/*.ts"),
});

const app = express();

const startServer = async () => {
  app.use(cors())
  app.use(json())
  app.use(await createRoutes()); // using registered routes from controllers and actions

  app.use(errorHandler)

  app.listen(APP_CONFIGS.PORT, () => {
    console.log("Express server is listening on port", APP_CONFIGS.PORT);
  });
}

startServer()