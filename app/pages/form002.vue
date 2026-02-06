<script setup lang="ts">
import { ref } from "vue";

const num = ref<number | null>(null);
const result = ref<string | object>("");

const submitForm = async () => {
	if (num.value === null) return;

	result.value = "Loading...";

	try {
		const res = await $fetch("/api/form002", {
			method: "POST",
			body: { num: num.value },
		});
		result.value = res;
	}
	catch (err: unknown) {
		const errorMessage = (err as { statusMessage?: string }).statusMessage || (err as Error).message || "Something unexpected happened.";
		result.value = errorMessage;
	}
};
</script>

<template>
	<div>
		<form @submit.prevent="submitForm">
			<label for="num">Inserisci un numero tra 1 e 5:</label>
			<input
				id="num"
				v-model.number="num"
				type="number"
				min="1"
				max="5"
				required
			>
			<button type="submit">
				Invia
			</button>
		</form>

		<div v-if="result">
			<p v-if="typeof result === 'string'">
				{{ result }}
			</p>
			<p v-else>
				ID: {{ result.id }}, Name: {{ result.name }}
			</p>
		</div>
	</div>
</template>
