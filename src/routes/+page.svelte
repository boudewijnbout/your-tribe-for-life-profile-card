<script>
	import * as prismicH from "@prismicio/helpers";
	import AdressCard from "$lib/components/AdressCard.svelte";
	import DeliveryCard from "$lib/components/DeliveryCard.svelte";
	import DeliveryCardItem from "$lib/components/DeliveryCardItem.svelte";
	import PaymentCard from "$lib/components/PaymentCard.svelte";
	import PaymentCardItem from "$lib/components/PaymentCardItem.svelte";
	import PersonalInfo from "$lib/components/PersonalInfo.svelte";

	export let data;
</script>

<main>
	<h1>Wie ben ik?</h1>

	<!-- AdressCard -->
	<AdressCard />

	<!-- DeliveryCard -->
	<DeliveryCard>
		<DeliveryCardItem
			cardImage="/images/fedex-logo@2x.png"
			cardPrice="&euro; 0.99"
			cardDate="22.07.2022"
			alt=""
		/>
		<DeliveryCardItem
			cardImage="/images/ups-logo@2x.png"
			cardPrice="&euro; 1.20"
			cardDate="01.08.2022"
			alt=""
		/>
		<DeliveryCardItem
			cardImage="/images/postnl-logo@2x.png"
			cardPrice="&euro; 2.25"
			cardDate="03.08.2022"
			alt=""
		/>
		<DeliveryCardItem
			cardImage="/images/dhl-logo@2x.png"
			cardPrice="Gratis"
			cardDate="04.08.2022"
			alt=""
		/>
	</DeliveryCard>

	<!-- PaymentCard -->
	<PaymentCard>
		<PaymentCardItem
			paymentImage="/images/paypal-logo@2x.png"
			paymentName="Paypal"
		/>
		<PaymentCardItem
			paymentImage="/images/mastercard-logo@2x.png"
			paymentName="MasterCard"
		/>
		<PaymentCardItem
			paymentImage="/images/ideal-logo@2x.png"
			paymentName="iDeal"
		/>
		<PaymentCardItem
			paymentImage="/images/visa-logo@2x.png"
			paymentName="Visa"
		/>
	</PaymentCard>

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

	main {
		/* margin: 6rem 9rem; */
		/* display: grid;
		grid-template-columns: 0.7fr 0.7fr 1.6fr;
		grid-template-rows: auto 0.5fr 0.5fr;
		grid-template-areas:
			". . PersonalInformation"
			"AdressCard AdressCard PersonalInformation"
			"DeliveryCard PaymentCard PersonalInformation"; */
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
			"AdressCard AdressCard PersonalInformation"
			"DeliveryCard PaymentCard PersonalInformation";
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
			margin: 3rem 4rem;
			grid-template-columns: .7fr .7fr 1.6fr;
		}
	}
</style>
