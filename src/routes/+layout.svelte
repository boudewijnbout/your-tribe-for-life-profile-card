<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<slot />

<style>
	:global(body) {
		background-image: linear-gradient(90deg, #2e424d, #5b8291 80%);
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		font-family: "Inter", sans-serif;
	}
</style>
