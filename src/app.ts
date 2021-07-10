import express from "express";
import * as url from "url";

import imageProcessesor from "./routers/image-processesor";

import { port } from "./config/settings";

export const app = express();

app.get("/", (req, res) => {
  return res.redirect(
    url.format({
      pathname: "/api/image",
      query: { ...(req.query as any) }
    })
  );
});

app.use("/api", imageProcessesor);

app.listen(port, () => console.log(`Server running on port ${port}`));
