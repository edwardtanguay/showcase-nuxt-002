<script lang="ts" setup>
const { data: tasks, status, refresh } = useFetch("/api/fetch004", { lazy: true, server: false, immediate: false, retry: 0 });

onMounted(() => {
	refresh();
});
</script>

<template>
	<div>
		<h2>Fetch004</h2>
		<div class="info">
			<ul class="dev">
				<li>
					Note that unlike Fetch003, this page on a blank browser load will show the page without the loaded
					data immediately, then load it on the client, note this is with <code>{ lazy: true, server: false,
						immediate: false, retry: 0 }</code>
				</li>
				<li>Note that without the <code>onMounted</code> code block, this page will get a hydration error.</li>
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
