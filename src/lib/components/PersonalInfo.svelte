<script>
	export let name;
	export let description;

</script>

<section>
	<div>
		<h2>{name}</h2>
	</div>

	<article>
		<p>
			{description}
		</p>
	</article>
</section>

<style>
	section {
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 1.25rem;
		padding: 1rem 1rem;
	}

	div {
		background-image: url("/images/personal-image.jpeg");
		background-size: cover;
		background-position: center 30%;
		height: 35vh;
		border-radius: 0.6rem;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
			rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
		position: relative;
	}

	h2 {
		margin: 0;
		background-color: #2e424d;
		color: #fff;
		padding: 0.6rem;
		border-radius: 0.6rem;
		position: absolute;
		bottom: -1.25rem;
		left: 1rem;
		font-size: 1.25rem;
	}

    article {
        margin: 2rem 1.5rem;
        color: #fff;
        font-size: .9rem;
        line-height: 1.5rem;
    }

	@media (min-width: 37.5rem) {
		section {
			grid-area: PersonalInformation;
			grid-row: 2;
			grid-column: 1 / 3;
		}
	}

	@media (min-width: 62.5rem) {
		section {
			grid-column: none;
			grid-row: none;
			grid-area: PersonalInformation;
			margin-left: 3rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		p {
			font-size: 1.05rem;
			line-height: 1.75rem;
		}
	}
</style>