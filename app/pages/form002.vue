<script setup lang="ts">
import { ref } from "vue";

const num = ref<number | null>(null);
const result = ref<string | object>("");
const isSubmitting = ref(false);

const submitForm = async () => {
	if (num.value === null) return;

	result.value = "Loading...";

	isSubmitting.value = true;
	try {
		const res = await $fetch("/api/form002", {
			method: "POST",
			body: { num: num.value },
		});
		result.value = res;
	}
	catch (err: unknown) {
		const errorMessage = (err as { statusMessage?: string }).statusMessage || (err as Error).message || "Something unexpected happened.";
		result.value = "Error: " + errorMessage;
	}
	finally {
		isSubmitting.value = false;
	}
};
</script>

<template>
	<div>
		<p class="prefix">Type an id for a product between 1 and 5:</p>
		<form @submit.prevent="submitForm">
			<input id="num"
				   v-model.number="num"
				   type="number"
				   min="1"
				   max="5"
				   required
				   :disabled="isSubmitting">
			<button type="submit"
					:disabled="isSubmitting">
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
<style scoped>
form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 10rem;
}
.prefix {
	margin-bottom: 1rem;
}	
input {
	text-align: center;
	width: 5rem;
}
</style>
