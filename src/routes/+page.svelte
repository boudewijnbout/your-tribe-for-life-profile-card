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
	<h1>Winkelmandje</h1>

	<section style="grid-area: AdressCard">
		<AdressCard />
	</section>

	<section style="grid-area: DeliveryCard">
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
	</section>

	<section style="grid-area: PaymentCard">
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
	</section>

	<section style="grid-area: PersonalInformation">
		<PersonalInfo />
	</section>
</main>

<style>
	:global(body) {
		background-image: linear-gradient(90deg, #2e424d, #5b8291 80%);
		background-repeat: no-repeat;
		background-size: cover;
	}

	main {
		margin: 6rem 9rem;
		display: grid;
		grid-template-columns: 0.7fr 0.7fr 1.6fr;
		grid-template-rows: auto 0.5fr 0.5fr;
		grid-template-areas:
			". . PersonalInformation"
			"AdressCard AdressCard PersonalInformation"
			"DeliveryCard PaymentCard PersonalInformation";
	}

	h1 {
		color: #fff;
	}
</style>
