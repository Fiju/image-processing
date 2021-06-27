import express from "express";

import imageProcessesor from "./routers/image-processesor";

import { port } from "./config/settings";

const app = express();

app.use("/api", imageProcessesor);

app.listen(port, () => console.log(`Server running on port ${port}`));
