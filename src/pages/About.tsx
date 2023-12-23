import Elysia from "elysia";
import { html } from "@elysiajs/html";
import PAGE from "../layouts/Page";

export const ABOUT = new Elysia()
  .use(html())
  .get(
    "/about",
    <PAGE title="About">
      <main>
        <h1>About Me</h1>
        <button hx-get="/part" hx-swap="outerHTML">
          Send Message
        </button>
      </main>
    </PAGE>
  )
  .get("/part", () => <h1>Message sent!</h1>);
