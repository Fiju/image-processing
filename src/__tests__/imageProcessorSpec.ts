"use strict";

import path from "path";
import pathNormalizer, { IResult } from "../helpers/path-normalizer";

describe("Image exist check", () => {
  it("It should return result telling image is available", async () => {
    const fileData: IResult = pathNormalizer("luffy", undefined, undefined);
    expect(fileData).toEqual({
      path: path.resolve(__dirname, "../../assets/luffy.jpg"),
      isAvailable: true
    });
  });

  it("It should return result telling image is not available", async () => {
    const fileData: IResult = pathNormalizer("missing", undefined, undefined);
    expect(fileData).toEqual({
      error: "Image not found"
    });
  });
});
