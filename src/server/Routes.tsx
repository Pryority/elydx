import Elysia from "elysia";
import { HOME } from "../pages/Home";
import { ABOUT } from "../pages/About";

export const ROUTES = new Elysia().use(HOME).use(ABOUT);
