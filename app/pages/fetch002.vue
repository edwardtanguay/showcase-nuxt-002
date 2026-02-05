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
			<ul class="dev">
			<li>This is fetch001 but the API route sometimes sends an error and sometimes the data. It handles the error gracefully.</li>
			<li>Notice that when there is an error, it is shown twice in the console log, this is because it tries twice.</li>
				<li :class="`status-${status}`">Status: {{ status }}</li>
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
