import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const text: string = body.text || "";
	const upper = text.toUpperCase();
	return { text: upper };
});
