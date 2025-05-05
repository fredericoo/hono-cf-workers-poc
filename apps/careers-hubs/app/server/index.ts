import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { createHonoServer } from "react-router-hono-server/cloudflare";
import { appRouter } from "./api";

// Create a root Hono app
const app = new Hono().use(
	"/api/*",
	trpcServer({
		router: appRouter,
	}),
);

export default await createHonoServer({ app });
