import Elysia from "elysia";
import { html } from "@elysiajs/html";
import PAGE from "../layouts/Page";

export const HOME = new Elysia()
  .use(html())
  .get(
    "/",
    <PAGE title="Home">
      <main>
        <button hx-get="/part" hx-swap="outerHTML">
          Hello _____
        </button>
      </main>
    </PAGE>
  )
  .get("/part", () => <h1>Hello World!</h1>);
