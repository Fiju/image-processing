import { Request, Response } from "express";
import { promises as fsPromise } from "fs";
import * as fs from "fs";
import sharp from "sharp";

const processesor = async (req: Request, res: Response) => {
  const { query } = req;
  const w: number = Number(query.width);
  const h: number = Number(query.height);
  await fsPromise.mkdir(
    require("path").resolve(__dirname, "../../assets/thumbnails/"),
    { recursive: true }
  );
  fs.writeFile(
    res.locals.path,
    await sharp(
      require("path").resolve(__dirname, `../../assets/${query.name}.jpg`)
    )
      .resize(w, h)
      .toBuffer(),
    (err: NodeJS.ErrnoException | null): void => {
      if (!err) res.sendFile(res.locals.path);
      else res.status(500).send("There was an error processing the image");
    }
  );
};

export default processesor;
