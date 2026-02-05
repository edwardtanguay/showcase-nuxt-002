<script lang="ts" setup>
const { data: tasks, status } = useFetch("/api/tasks", { lazy: true, server: false });
</script>

<template>
	<div>
		<article>
			<span
				v-if="status === 'pending'"
				aria-busy="true"
			/>
			<div 
				v-if="status === 'success'"
>
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
	</div>
</template>
