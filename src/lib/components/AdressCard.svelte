<section>
	<h3>Factuuradres</h3>

	<article>
		<img src="images/fdnd-logo.png" alt="" />

		<div>
			<h4>Front-End Design & Development</h4>
			<span>Sarphatistraat 370, Amsterdam</span>
			<span>fdnd.nl</span>
		</div>
	</article>
</section>

<style>

	section {
		display: none;
	}

	h3 {
		color: #fff;
	}

	article {
		background-color: rgba(255, 255, 255, 0.3);
		padding: 1.8rem 1.5rem;
		border-radius: 1.25rem;
		display: flex;
		align-items: center;
	}

	img {
		margin-right: 1rem;
	}

	div {
		display: flex;
		flex-direction: column;
	}

	h4 {
		color: #fff;
		font-weight: 400;
		margin: 0 0 0.25rem 0;
	}

	span {
		color: #e5e5e5;
		font-size: 0.85rem;
		font-weight: 200;
	}

	@media (min-width: 75rem) {
		section {
			display: block;
			grid-area: AdressCard;
		}
	}
</style>
