import { html } from "@elysiajs/html";
import Elysia from "elysia";

export const HTML = new Elysia().use(html());
