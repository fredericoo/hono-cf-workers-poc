import { reactRouter } from "@react-router/dev/vite";
import { cloudflareDevProxy } from "@react-router/dev/vite/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { reactRouterHonoServer } from "react-router-hono-server/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		cloudflareDevProxy(),
		reactRouterHonoServer({
			runtime: "cloudflare",
			flag: { force_react_19: true },
		}),
		tailwindcss(),
		reactRouter(),
		tsconfigPaths(),
	],
});
