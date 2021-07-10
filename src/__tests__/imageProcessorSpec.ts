"use strict";

import pathNormalizer, { IResult } from "../helpers/path-normalizer";

describe("Image exist check", () => {
  it("should", async () => {
    const fileData: IResult = pathNormalizer("luffy", undefined, undefined);
    expect(fileData).toEqual({ error: "Image not found" });
  });
});
