import { defineEventHandler, readBody, createError } from "h3";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const num: number = Number(body.num);

	const objects = [
		{ id: 1, name: "Object 1" },
		{ id: 2, name: "Object 2" },
		{ id: 3, name: "Object 3" },
	];

	const random = Math.floor(Math.random() * 2) + 1;
	if (random === 2) {
		throw createError({ statusCode: 500, statusMessage: "Server error, try again" });
	}

	const obj = objects.find(o => o.id === num);
	if (!obj) {
		throw createError({ statusCode: 404, statusMessage: "Object not found" });
	}

	return obj;
});
