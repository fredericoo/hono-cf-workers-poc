import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

const publicProcedure = t.procedure;
const router = t.router;

export const appRouter = router({
	hello: publicProcedure.query(() => {
		return "Hello from tRPC";
	}),
});

export type AppRouter = typeof appRouter;
