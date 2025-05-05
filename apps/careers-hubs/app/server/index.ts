import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { createHonoServer } from "react-router-hono-server/cloudflare";
import { appRouter } from "./api";

// Create a root Hono app
const app = new Hono()
	.use(
		"/api/*",
		cors({
			origin: (origin) => origin,
			allowHeaders: ["Upgrade-Insecure-Requests", "Content-Type"],
			allowMethods: ["GET", "POST", "PATCH", "DELETE"],
			exposeHeaders: ["Content-Length"],
			maxAge: 600,
			credentials: true,
		}),
	)
	.use(
		"/api/*",
		trpcServer({
			router: appRouter,
		}),
	);

export default await createHonoServer({ app });
