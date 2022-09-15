<section>
	<h3>Levering</h3>

	<ul>
		<slot />
	</ul>
</section>

<style>

	section {
		display: none;
	}

	h3 {
		color: #fff;
		font-weight: 400;
	}

	ul {
		background-color: rgba(255, 255, 255, 0.3);
		list-style: none;
		border-radius: 1.25rem;
		padding: 1.8rem 1.5rem;
	}

	@media (min-width: 75rem) {
		section {
			display: block;
			grid-area: DeliveryCard;
		}
	}
</style>
