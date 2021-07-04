import { promises as fsPromise, existsSync, createReadStream } from "fs";
import { Request, Response } from "express";
import pathNormalizer from "../helpers/path-normalizer";

const accessesor = async (req: Request, res: Response, next: Function) => {
  const { query } = req;
  const fileData = pathNormalizer(
    query.name as string,
    query.width as string,
    query.height as string
  );
  if (!!fileData.error) res.status(400).send(fileData.error);
  else if (fileData.isAvailable) {
    const r = createReadStream(fileData.path);
    res.type("jpg").status(200);
    r.pipe(res);
    res.send(r);
  } else {
    res.locals.path = fileData.path;
    next();
  }
};

export default accessesor;
