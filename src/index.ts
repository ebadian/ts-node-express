import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";
import nunjucks from "nunjucks";
import sassMiddleware from "node-sass-middleware";
import path from "path"

import { db } from "./db/inMemoryDb"
import { GridColumn } from "./types/gridColumn"

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactApp from './views/App';



dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

const modukPath = path.join(__dirname, '../node_modules/@moduk/frontend/nunjucks');
const govukPath = path.join(__dirname, '../node_modules/govuk-frontend/dist');

app.use(express.static(path.join(__dirname, "../public"), { index: false }));


const nunjucksPaths = [
    path.join(__dirname, "views"), // Your views directory
    modukPath,
    govukPath
];

const env = nunjucks.configure(nunjucksPaths, {
    autoescape: true,
    express: app,
    watch: true,
    noCache: true
});



//debuggig for paths
console.log("Nunjucks search paths:", nunjucksPaths);

async function initializeApp() {
    try {
        await db.loadFromFile('./resources/data.json')
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
        console.log(db.getAccordionItems())
    })
}

app.use(
    sassMiddleware({
        src: path.join(__dirname, "src/styles"),
        dest: path.join(__dirname, "public/styles"),
        outputStyle: "compressed",
        prefix: "/styles",
        includePaths: [path.join(__dirname, 'node_modules')]
    })
)


app.set("view engine", "njk");

app.set('views', path.join(__dirname, 'src/views'));


app.get('/styles/main.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/styles/main.css'));
  });

app.get("/", (req:Request, res:Response) => {
    res.render("index.njk", {
        accordionItems: db.getAccordionItems()
    })
})

app.get('/react', (req, res) => {
    const html = ReactDOMServer.renderToString(React.createElement(ReactApp));
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>React App</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/client-bundle.js"></script>
        </body>
      </html>
    `);
});

app.get("/grid", (req:Request, res:Response) => {
    
    const contentColumns: GridColumn[] = [
        {
            text: {
                text: "This the first column text"
            },
            link: {
                text: "This the first column link",
                href: "/column1"
            }
        },
        {
            text: {
                text: "This the second column text"
            },
            link: {
                text: "This the second column link",
                href: "/column2"
            }
        }
      ];

    res.render("grid.njk", {
        columns: contentColumns
    })
})

export { app };

if (require.main === module) {
    initializeApp().catch(console.error);
  }


