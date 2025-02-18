import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";
import nunjucks from "nunjucks";
import sassMiddleware from "node-sass-middleware";
import path from "path"

import { db } from "./db/inMemoryDb"
import { GridColumn } from "./types/gridColumn"

import React, { ReactElement, JSX } from 'react';
import ReactDOMServer from 'react-dom/server';
import ColumnTextWrapper, { ColumnTextWrapperProps } from './views/components/Column';
import RowHeader from "./views/components/RowHeader";
import ModHeader from "./views/components/ ModHeader";
import MastHead from "./views/components/MastHead";
import MainContainer from "./views/components/MainContainer";
import { Header, MODUKBody } from "@moduk/frontend/react";

import { PhaseBanner, PhaseTag } from '@moduk/frontend/react'

import TiledRows, { TiledRowsProps } from "./views/components/TiledRows";
import DDFooter from "./views/components/Footer";






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

app.get("/", (req: Request, res: Response) => {
    res.render("index.njk", {
        accordionItems: db.getAccordionItems()
    })
})


app.get('/react', (req, res) => {

    const content = {

        modHeader: { isBeta: true },
        tileItems: [
            {
                href: "https://www.digital.mod.uk/service-manual",
                text: "some text",
                longText: "Check the standards you need to follow and how to design and deliver great services in Defence."
            },
            {
                href: "https://www.digital.mod.uk/service-manual",
                text: "some text",
                longText: "Check the standards you need to follow and how to design and deliver great services in Defence."
            },
            {
                href: "https://www.digital.mod.uk/service-manual",
                text: "some text",
                longText: "Check the standards you need to follow and how to design and deliver great services in Defence."
            }

        ],
        tileHeader: { rowHeaderText: "Follow Defence patterns and standards" },

    }



    const modHeader = () => {
        return React.createElement(ModHeader, content.modHeader);
    }

    const columns = React.createElement(ColumnTextWrapper, { columnItems: content.tileItems })


    const mainContent: ReactElement[] = [];
    mainContent.push(React.createElement(RowHeader, content.tileHeader))
    mainContent.push(columns)

    const mainContainer = React.createElement(MainContainer, { components: mainContent });

    //console.log(require('@moduk/frontend/package.json'));





    const app = React.createElement("div", null,
        modHeader(),
        React.createElement(MastHead),
        mainContainer,

    );

    const html = ReactDOMServer.renderToString(React.createElement("div", null, app));


    res.send(`
    <!DOCTYPE html>
    <html lang="en" class="govuk-template">
        <head>
            <meta charset="UTF-8" />
            <title>React App</title>
            <link rel="stylesheet" href="/styles/main.css">
            <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
            <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
        </head>
         <body class="govuk-template__body" id="page-top">
            <div class="govuk-template__body js-enabled govuk-frontend-supported" id="page-top">${html}</div>

        </body>
    </html>
    `);
});


app.get('/reactjsx', (req, res) => {

    const content = {

        modHeader: { isBeta: true },
        tiledRows: [{
            title: "Follow Defence patterns and standards",
            tiles: [

                {
                    url: "https://www.digital.mod.uk/service-manual",
                    linkText: "some text",
                    description: "Check the standards you need to follow and how to design and deliver great services in Defence."
                },
                {
                    url: "https://www.digital.mod.uk/service-manual",
                    linkText: "some text",
                    description: "Check the standards you need to follow and how to design and deliver great services in Defence."
                },
                {
                    url: "https://www.digital.mod.uk/service-manual",
                    linkText: "some text",
                    description: "Check the standards you need to follow and how to design and deliver great services in Defence."
                }
            ],
            horizontalRule: true

        },
        {
            title: "Follow Defence patterns and standards",
            tiles: [

                {
                    url: "https://www.digital.mod.uk/service-manual",
                    linkText: "some text",
                    description: "Check the standards you need to follow and how to design and deliver great services in Defence."
                },
                {
                    url: "https://www.digital.mod.uk/service-manual",
                    linkText: "some text",
                    description: "Check the standards you need to follow and how to design and deliver great services in Defence."
                },
                {
                    url: "https://www.digital.mod.uk/service-manual",
                    linkText: "some text",
                    description: "Check the standards you need to follow and how to design and deliver great services in Defence."
                }
            ],
            horizontalRule: false

        }
        ],

    };


    const parseTiledRows = (tiledRows: TiledRowsProps[]) =>
        tiledRows.map((row, index) => (
            <TiledRows title={row.title} tiles={row.tiles} horizontalRule={row.horizontalRule} />

        ));

    const html = ReactDOMServer.renderToString(
        <>
            <MODUKBody className='govuk-template__body js-enabled govuk-frontend-supported' id="page-top">
                {/* <Header serviceName="Digital MOD.UK" role='banner'>
                </Header>
                <PhaseBanner phaseTag={<PhaseTag>Beta</PhaseTag>}>
                        This is a new service – your <a className='govuk-link' href='#'>feedback</a> will help us to improve it.
                    </PhaseBanner> */}
                <ModHeader isBeta={true} />
                <MastHead />
                <MainContainer components={parseTiledRows(content.tiledRows)} />
                <DDFooter />
            </MODUKBody>
        </>
    );

    res.send(`
        <!DOCTYPE html>
        <html lang="en" class="govuk-template">
            <head>
                <meta charset="UTF-8" />
                <title>React App</title>
                <link rel="stylesheet" href="/styles/main.css">
                <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
                <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
            </head>
            
                ${html}
      
        </html>
    `);
});



app.get("/grid", (req: Request, res: Response) => {

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


