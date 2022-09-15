<script>
	export let cardImage;
	export let cardName;
	export let cardPrice;
	export let cardDate;
</script>

<li>
	<figure>
		<img src={cardImage} alt={cardName} />
	</figure>
	<div>
		<span>{cardPrice}</span>
		<span>{cardDate}</span>
	</div>
</li>

<style>
	li {
		display: flex;
		align-items: center;
		color: #ffff;
		margin-bottom: 1.5rem;
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
	}

	li:nth-child(1) > figure {
		background: #671eb2;
	}

	li:nth-child(1) > figure img {
		width: 100%;
	}

	li:nth-child(2) > figure {
		background: #543a3b;
	}

	li:nth-child(2) > figure img {
		width: 55%;
	}

	li:nth-child(3) > figure {
		background: #3334ab;
	}

	li:nth-child(3) > figure img {
		width: 70%;
	}

	li:nth-child(4) > figure {
		background: #fed217;
	}

	li:nth-child(4) > figure img {
		width: 100%;
	}

	img {
		width: 90%;
	}

	div {
		display: flex;
		flex-direction: column;
	}

	span:nth-child(1) {
		margin-bottom: .25rem;
		font-weight: 400;
	}

	span:nth-child(2) {
		color: #E5E5E5;
		font-weight: 200;
		font-size: .85rem;
	}
</style>
