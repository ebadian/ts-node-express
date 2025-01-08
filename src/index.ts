import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";
import nunjucks from "nunjucks";
import path from "path"

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

nunjucks.configure(path.join(__dirname, "views"),{
    autoescape: true,
    express:app,
    watch: true
});

app.set("view engine", "njk");


app.get("/", (req:Request, res:Response) => {
    const data = {
        title: "Hello World",
        message: "Welcome to the World!"
    }
    res.render("index.njk", data)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})


