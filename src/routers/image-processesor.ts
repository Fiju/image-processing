import express from "express";

const imageProcessesor = express.Router();

imageProcessesor.get(
  "/image",
  (request: express.Request, response: express.Response): void => {
    response.send("Router configured");
  }
);

export default imageProcessesor;
