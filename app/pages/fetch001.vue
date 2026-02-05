<script lang="ts" setup>
const { data: tasks } = useFetch("/api/fetch001");
</script>

<template>
	<article>
		<h2>Fetch001</h2>
		<p>
			This is he simplest fest, simply getting a static array of objects from the API route. Note that it loads
			fast and has no hydration errors.
		</p>
		<ul>
			<li v-for="task in tasks"
				:key="task.id">
				{{ task.title }}
			</li>
		</ul>
	</article>
</template>
