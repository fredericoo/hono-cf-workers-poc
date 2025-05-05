import { Hono } from "hono";
import { createHonoServer } from "react-router-hono-server/cloudflare";

// Create a root Hono app
const app = new Hono().get("/api/*", () => new Response("hey"));

export default await createHonoServer({ app });
