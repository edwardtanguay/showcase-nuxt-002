export default defineEventHandler(async (event) => {
	await new Promise(resolve => setTimeout(resolve, 2000));
	// Randomly return an error or the array (1 => array, 2 => error)
	const n = Math.floor(Math.random() * 2) + 1;

	if (n === 2) {
		return sendError(event, createError({
			statusCode: 500,
			message: "Random error occurred",
		}));
	}

	return [
		{
			id: 1,
			title: "Learn Nuxt",
			completed: false,
		},
		{
			id: 2,
			title: "Learn Vue",
			completed: false,
		},
	];
});
