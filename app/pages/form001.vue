<script setup lang="ts">
import { ref } from "vue";

const inputText = ref("");
const outputText = ref("");

const submitForm = async () => {
	try {
		const res = await $fetch("/api/form001", {
			method: "POST",
			body: { text: inputText.value },
		});
		outputText.value = res.text;
	}
	catch (err: any) {
		outputText.value = "Errore: " + (err.message || "qualcosa è andato storto");
	}
};
</script>

<template>
	<form @submit.prevent="submitForm">
		<label for="inputText">Inserisci testo:</label>
		<input
			id="inputText"
			v-model="inputText"
			type="text"
			required
		>
		<button type="submit">
			Invia
		</button>
	</form>

	<p v-if="outputText">
		Testo in maiuscolo: {{ outputText }}
	</p>
</template>
