<script lang="ts" setup>
const { data: tasks } = useFetch("/api/fetch001");
</script>

<template>
	<div>
		<h2>Fetch001</h2>
		<div class="info">
			<ul class="dev">
				<li>
					This is he simplest fetch, simply getting a static array of objects from the API route. Note that it
					loads fast and has no hydration errors.
				</li>
			</ul>
		</div>
		<article>
			<ul>
				<li
					v-for="task in tasks"
					:key="task.id"
				>
					{{ task.title }}
				</li>
			</ul>
		</article>
	</div>
</template>
