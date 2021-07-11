import express from "express";
import * as url from "url";

import imageProcessesor from "./routers/image-processesor";

import { port } from "./config/settings";

export const app: express.Express = express();

app.get("/", (req, res): void => {
  return res.redirect(
    url.format({
      pathname: "/api/image",
      query: { ...req.query },
    } as url.UrlObject)
  );
});

app.use("/api", imageProcessesor);

app.listen(port, (): void => console.log(`Server running on port ${port}`));
