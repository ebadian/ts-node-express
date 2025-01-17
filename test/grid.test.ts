import nunjucks, { Environment } from "nunjucks";
import path from "path"

let env: Environment;

beforeEach(() => {
  env = nunjucks.configure(path.join(__dirname, "../src/views"), {
    autoescape: true,
    noCache: true,
  });
});


test("grid macro with empty columns", () => {
  const result = env.renderString(`
    {% import "components/grid.njk" as grid %}
    {{ grid.gridColumns(gridColumns) }}
  `, {
    gridColumns: []
  });

  expect(result.trim()).toContain('No columns data available');
});


test("grid macro with columns", () => {
  const result = env.renderString(`
    {% import "components/grid.njk" as grid %}
    {{ grid.gridColumns(gridColumns) }}
  `, {
    gridColumns: [
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
    ]
  });

  expect(result.trim()).toContain(`<div class=\"govuk-grid-column-one-third\">`);
  expect(result.trim()).toContain(`<a href=\"/column1\">This the first column link</a>`);
  expect(result.trim()).toContain(`<p>This the first column text</p>`);
});
