<script>
	import * as prismicH from "@prismicio/helpers";
	import CurrentDegree from "$lib/components/CurrentDegree.svelte";
	import HobbyCard from "$lib/components/HobbyCard.svelte";
	import HobbyCardItem from "$lib/components/HobbyCardItem.svelte";
	import SkillsCard from "$lib/components/SkillsCard.svelte";
	import SkillsCardItem from "$lib/components/SkillsCardItem.svelte";
	import PersonalInfo from "$lib/components/PersonalInfo.svelte";

	export let data;
</script>

<main>
	<h1>Wie ben ik?</h1>

	<!-- CurrentDegree -->
	<CurrentDegree />

	<!-- HobbyCard -->
	<HobbyCard>
		<HobbyCardItem
			cardImage="💻"
			cardName="Programmeren"
			alt=""
		/>
		<HobbyCardItem
			cardImage="🎨"
			cardName="Ontwerpen"
			alt=""
		/>
		<HobbyCardItem
			cardImage="🎮"
			cardName="Gamen"
			alt=""
		/>
		<HobbyCardItem
			cardImage="🎥"
			cardName="Films kijken"
			alt=""
		/>
	</HobbyCard>


	<!-- SkillsCard -->
	<SkillsCard>
		<SkillsCardItem
			skillImage="/images/sveltekit-logo@2x.png"
			skillName="SvelteKit"
		/>
		<SkillsCardItem
			skillImage="/images/html-logo@2x.png"
			skillName="HTML5"
		/>
		<SkillsCardItem
			skillImage="/images/css-logo@2x.png"
			skillName="CSS3"
		/>
		<SkillsCardItem
			skillImage="/images/js-logo@2x.png"
			skillName="JavaScript"
		/>
	</SkillsCard>

	<!-- PersonalInformation Card -->
	<PersonalInfo />
</main>

<style>
	:global(body) {
		background-image: linear-gradient(90deg, #2e424d, #5b8291 80%);
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
	}

	h1 {
		color: #fff;
		font-size: 1.85rem;
		margin-left: 1rem;
	}

	@media (min-width: 37.5rem) {
		main {
			margin: 1rem 1rem;
			display: grid;
			grid-template-columns: .7fr .7fr;
			grid-template-rows: auto .5fr .5fr;
			grid-template-areas:
			". . PersonalInformation"
			"CurrentDegree CurrentDegree PersonalInformation"
			"HobbyCard SkillsCard PersonalInformation";
		}

		h1 {
			margin-left: 0;
		}
	}

	@media (min-width: 56.25rem) {
		main {
			margin: 2rem 2rem;
		}
	}

	@media (min-width: 62.5rem) {
		main {
			margin: 5rem 5rem;
			grid-template-columns: .7fr .7fr 1.6fr;
		}

		h1 {
			font-size: 2rem;
			margin-top: 0;
		}
	}
</style>
