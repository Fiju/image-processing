import express from "express";

const imageProcessesor = express.Router();
import processesor from "../middlewares/image-processing";
import accessesor from "../middlewares/file-accessor";

imageProcessesor.get("/image", [accessesor, processesor]);

export default imageProcessesor;
