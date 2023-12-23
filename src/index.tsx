import { Elysia } from "elysia";
import { ROUTES } from "./server/Routes";
import { HTML } from "./server/Html";
import { O } from "./server/O";

new Elysia().use(HTML).use(ROUTES).listen(3000, O);
