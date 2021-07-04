import express from "express";
import { promises as fs } from "fs";

const imageProcessesor = express.Router();
import processesor from "../middlewares/image-processing";
import accessesor from "../middlewares/file-accessor";

imageProcessesor.get("/image", [accessesor, processesor]);

export default imageProcessesor;
