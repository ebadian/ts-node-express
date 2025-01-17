import { app } from "../src/index";
import request from "supertest";

describe("get the grid page", () => {
    it("should return the grid page", async () => {
        const response = await request(app).get("/grid");
        expect(response.status).toBe(200);
        expect(response.text).toContain("This the first column text");
    });
});