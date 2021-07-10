import { Request, Response } from "express";
import { createReadStream } from "fs";
import Jimp from "jimp";

const processesor = async (req: Request, res: Response, next: Function) => {
  const { query } = req;
  await Jimp.read(
    require("path").resolve(__dirname, `../../assets/${query.name}.jpg`)
  )
    .then((img) => {
      const w: number = Number(query.width);
      const h: number = Number(query.height);
      img.resize(w, h).write(res.locals.path);
    })
    .catch((err) => {
      console.error(err);
    });
  const r = createReadStream(res.locals.path);
  res.type("jpg").status(200);
  r.pipe(res);
  res.send(r);
  next();
};

export default processesor;
