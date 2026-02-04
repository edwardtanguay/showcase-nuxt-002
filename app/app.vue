<script lang="ts" setup>
const { data: tasks } = await useFetch("/api/tasks");
</script>

<template>
	<NuxtLayout>
		<article>
			<div v-if="tasks">
				<h2>Tasks from API:</h2>
				<ul>
					<li
						v-for="task in tasks"
						:key="task.id"
					>
						{{ task.title }}
					</li>
				</ul>
			</div>
		</article>
		<NuxtPage />
	</NuxtLayout>
</template>
