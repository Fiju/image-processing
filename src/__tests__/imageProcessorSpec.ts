"use strict";

import fs from "fs";
import path from "path";
import { Request, Response } from "express";
import pathNormalizer, { IResult } from "../helpers/path-normalizer";
import processesor from "../middlewares/image-processing";
import accessesor from "../middlewares/file-accessor";

describe("Image exist test", () => {
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

describe("Image processor test", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {};
  });

  beforeAll((done) => {
    fs.rmdir("assets/thumbnails/", { recursive: true }, () => {
      done();
    });
  });

  afterAll((done) => {
    fs.rmdir("assets/thumbnails/", { recursive: true }, () => {
      done();
    });
  });

  it("It should process image and vrify that image is saved", async () => {
    mockRequest = { query: { name: "luffy", width: "200", height: "200" } };
    mockResponse = {
      locals: {
        path: path.resolve(
          __dirname,
          "../../assets/thumbnails/luffy_200x200.jpg"
        )
      },
      sendFile: (output) => {
        expect(output).toBe(
          path.resolve(__dirname, "../../assets/thumbnails/luffy_200x200.jpg")
        );
      }
    };
    await processesor(mockRequest as Request, mockResponse as Response);
    await accessesor(
      mockRequest as Request,
      mockResponse as Response,
      // eslint-disable-next-line no-empty-function
      () => {}
    );
  });
});
