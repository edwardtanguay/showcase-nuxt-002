<script lang="ts" setup>
const { data: tasks, status, refresh } = useFetch("/api/fetch002", { lazy: true, server: false, immediate: false });

onMounted(() => {
	refresh();
});

</script>

<template>
	<div>
		<h2>Fetch002</h2>
		<div class="info">
			<p>This is a fetch that is not loaded on the server. It is loaded on the client.</p>
			<ul class="dev">
				<li>Status: {{ status }}</li>
			</ul>
		</div>
		<article v-if="status === 'error'">
			<p>Sorry, there was an error, please load the page again.</p>
		</article>
		<article v-if="status === 'success'">
			<h2>Tasks from API:</h2>
			<ul>
				<li v-for="task in tasks"
					:key="task.id">
					{{ task.title }}
				</li>
			</ul>
		</article>
	</div>
</template>
