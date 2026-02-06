import { defineEventHandler, readBody, createError } from "h3";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const num: number = Number(body.num);

	// Array di oggetti
	const objects = [
		{ id: 1, name: "Oggetto 1" },
		{ id: 2, name: "Oggetto 2" },
		{ id: 3, name: "Oggetto 3" },
	];

	// Controllo random 1 o 2: se 2, errore server 500
	const random = Math.floor(Math.random() * 2) + 1;
	if (random === 2) {
		throw createError({ statusCode: 500, statusMessage: "Errore server casuale" });
	}

	// Controllo numero inviato
	const obj = objects.find(o => o.id === num);
	if (!obj) {
		throw createError({ statusCode: 404, statusMessage: "Oggetto non trovato" });
	}

	return obj;
});
