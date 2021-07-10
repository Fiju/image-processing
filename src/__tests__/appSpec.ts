import request from "supertest";
import { app } from "../app";

describe("It should test endpoint", () => {
  it("Request '/' should return staus 302 as it is redirecting", async () => {
    const result = await request(app).get("/").send();

    expect(result.status).toBe(302);
  });

  it("Request '/api/image' should return status 400 as file name is missing", async () => {
    const result = await request(app).get("/api/image").send();

    expect(result.status).toBe(400);
  });
});
