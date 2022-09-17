<section>
	<h3>Huidige opleiding:</h3>

	<article>
		<img src="images/fdnd-logo.png" alt="Front-End Design & Development Logo" />

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
		font-size: 1.25rem;
		font-weight: 300;
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
		width: 30%;
		height: auto;
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
		color: #fff;
		font-size: 0.83rem;
		font-weight: 300;
		margin-bottom: .2rem;
	}

	@media (min-width: 62.5rem) {
		section {
			display: block;
			grid-area: CurrentDegree;
		}

		img {
			width: 11%;
		}
	}
</style>