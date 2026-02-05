<script lang="ts" setup>
const { data: tasks } = useFetch("/api/fetch001", { lazy: true, server: false });
</script>

<template>
	<article>
		<article>
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
	</article>
</template>
