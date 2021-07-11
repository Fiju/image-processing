import { createReadStream, PathLike, ReadStream } from "fs";
import { Request, Response } from "express";
import pathNormalizer, { IResult } from "../helpers/path-normalizer";

const accessesor = async (
  req: Request,
  res: Response,
  next: Function
): Promise<void> => {
  const { query } = req;
  const fileData: IResult = pathNormalizer(
    query.name as string,
    query.width as string,
    query.height as string
  );
  if (!!fileData.error) res.status(400).send(fileData.error);
  else if (fileData.isAvailable) {
    const r: ReadStream = createReadStream(fileData.path as PathLike);
    res.type("jpg").status(200);
    r.pipe(res);
    res.send(r);
  } else {
    res.locals.path = fileData.path;
    next();
  }
};

export default accessesor;
