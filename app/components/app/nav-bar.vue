<template>
	<nav class="container">
		<ul>
			<li><strong>Tasks App</strong></li>
		</ul>
		<ul>
			<li><NuxtLink :to="{ name: 'index'}">Home</NuxtLink></li>
			<li><NuxtLink :to="{ name: 'create'}">Create Task</NuxtLink></li>
		</ul>
	</nav>
</template>