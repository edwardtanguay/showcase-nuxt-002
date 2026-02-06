<template>
	<nav class="container">
		<ul>
			<li><strong>Nuxt Showcase</strong></li>
		</ul>
		<ul>
			<li><NuxtLink :to="{ name: 'index' }">Home</NuxtLink></li>
			<li><NuxtLink :to="{ name: 'fetch001' }">Fetch001</NuxtLink></li>
			<li><NuxtLink :to="{ name: 'fetch002' }">Fetch002</NuxtLink></li>
			<li><NuxtLink :to="{ name: 'fetch003' }">Fetch003</NuxtLink></li>
			<li><NuxtLink :to="{ name: 'fetch004' }">Fetch004</NuxtLink></li>
			<li><NuxtLink :to="{ name: 'form001' }">Form001</NuxtLink></li>
			<li><NuxtLink :to="{ name: 'create' }">Create Task</NuxtLink></li>
		</ul>
	</nav>
</template>
