<script>
	export let skillImage;
	export let skillName;
</script>

<li>
	<figure>
		<img src={skillImage} alt={skillName} />
	</figure>
	<div>
		<span>{skillName}</span>
	</div>
</li>

<style>
	li {
		display: flex;
		align-items: center;
		color: #ffff;
		margin-bottom: 1.5rem;
		font-weight: 200;
		font-size: .9rem;
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
		background-color: rgba(46, 66, 77, .5);;
	}

	li:nth-child(1) > figure img {
		width: 100%;
		margin-top: .5rem;
	}

	li:nth-child(2) > figure img {
		width: 100%;
	}

	li:nth-child(3) > figure img {
		width: 85%;
	}

	li:nth-child(4) {
		margin-bottom: 0;
	}

	li:nth-child(4) > figure img {
		width: 140%;
	}

	img {
		width: 90%;
	}

	span:nth-child(1) {
		margin-bottom: .25rem;
		font-weight: 400;
    }   
</style>
