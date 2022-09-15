<script>
	export let paymentImage;
	export let paymentName;
</script>

<li>
	<figure>
		<img src={paymentImage} alt={paymentName} />
	</figure>
	<div>
		<span>{paymentName}</span>
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
		background: #6CD1FF;
	}

	li:nth-child(1) > figure img {
		width: 90%;
	}

	li:nth-child(2) > figure {
		background: #FFE5BB;
	}

	li:nth-child(2) > figure img {
		width: 90%;
	}

	li:nth-child(3) > figure {
		background: #E765A5;
	}

	li:nth-child(3) > figure img {
		width: 80%;
	}

	li:nth-child(4) > figure {
		background: #FAD060;
	}

	img {
		width: 90%;
	}

	span:nth-child(1) {
		margin-bottom: .25rem;
		font-weight: 400;
    }   
</style>
