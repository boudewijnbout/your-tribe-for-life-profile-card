<script>
	export let cardImage;
	export let cardName;
</script>

<li>
	<figure>
		<span>{cardImage}</span>
	</figure>
	<div>
		<span>{cardName}</span>
	</div>
</li>

<style>
	li {
		display: flex;
		align-items: center;
		color: #ffff;
		margin-bottom: 1.5rem;
		font-weight: 300;
		font-size: .9rem;
	}

	li:nth-child(4) {
		margin-bottom: 0;
	}

	figure {
		width: 3rem;
		height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.5rem;
		padding: 0.2rem;
		margin: 0 1.5rem 0 0;
		background-color: rgba(46, 66, 77, .5);
	}

	figure:nth-child(1) span {
		font-size: 1.5rem;
	}

	div {
		display: flex;
		flex-direction: column;
	}
</style>
