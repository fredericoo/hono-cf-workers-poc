import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../../careers-hubs/app/server/api";

export const trpc = createTRPCClient<AppRouter>({
	links: [
		httpBatchLink({
			url: "http://localhost:5174/api",
			fetch(url, options) {
				return fetch(url, {
					...options,
					credentials: "include",
				});
			},
		}),
	],
});
