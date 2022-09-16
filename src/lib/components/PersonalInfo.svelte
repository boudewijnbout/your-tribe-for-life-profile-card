<section>
	<div>
		<h2>Boudewijn Bout</h2>
	</div>

	<article>
		<p>
			Hi! Mijn naam is Boudewijn Bout. Ik ben 21 jaar oud en volg de opleiding
			FDND Bij de HvA in Amsterdam. In mijn vrije tijd vind ik het leuk om bezig
			te zijn met: Programmeren, schetsen / vormgeven en gamen. Qua huisdieren
			heb ik een Hond. Als ik aan het gamen ben speel ik het liefst spellen,
			zoals: WarThunder, Call of Duty en GTA 5.
		</p>
	</article>
</section>

<style>
	section {
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 1.25rem;
		/* margin-left: 3rem; */
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
	}
</style>