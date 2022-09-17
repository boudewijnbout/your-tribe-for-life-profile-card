<script>
	import { onMount } from "svelte";

	let isPageLoaded = false;

	onMount(() => {
		setTimeout(() => {
			isPageLoaded = true;
		}, 1500);
	});
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if !isPageLoaded}
	<div class="loader-wrapper">
		<div class="loader" />
	</div>
{/if}

<slot />

<style>
	:global(body) {
		background-image: linear-gradient(90deg, #2e424d, #5b8291 80%);
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		font-family: "Inter", sans-serif;
	}

	.loader-wrapper {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(30px);
		top: 0;
		left: 0;
		z-index: 999;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loader {
		width: 4rem;
		height: 4rem;
		border: 5px solid #fff;
		border-bottom-color: rgba(46, 66, 77, 0.5);
		border-radius: 50%;
		animation: rotation 1s linear infinite;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
