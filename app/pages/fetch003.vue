<script lang="ts" setup>
const { data: tasks, status } = useFetch("/api/fetch003");
</script>

<template>
	<div>
		<h2>Fetch003</h2>
		<div class="info">
			<ul class="dev">
				<li>
					Notice that if you load this on a blank browser, it takes 2 seconds to appear. Fetch004 fixes this.
				</li>
				<li>
					Notice that when there is an error, it is shown twice in the console log, this is because it tries
					twice.
				</li>
				<li :class="`status-${status}`">
					Status: {{ status }}
				</li>
			</ul>
		</div>
		<article v-if="status === 'error'">
			<p>Sorry, there was an error, please load the page again.</p>
		</article>
		<article v-if="status === 'success'">
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
	</div>
</template>
