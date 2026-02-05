<script lang="ts" setup>
const { data: tasks, status } = useFetch("/api/fetch002", { lazy: true, server: false });
</script>

<template>
	<article>
		<p>Status: {{ status }}</p>
		<h2>Tasks from API:</h2>
		<ul>
			<li
				v-for="task in tasks"
				:key="task.id"
			>
				{{ task.title }}
			</li>
		</ul>
	</article>
</template>
