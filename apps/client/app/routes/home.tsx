import { trpc } from "~/features/api";
import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta({ data }: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: data.test },
	];
}

export const clientLoader = async () => {
	return {
		test: await trpc.hello.query(),
	};
};

export default function Home({ loaderData }: Route.ComponentProps) {
	return <div>{loaderData.test}</div>;
}
