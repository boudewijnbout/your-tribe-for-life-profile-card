<script>
    import {page} from "$app/stores";
</script>

<section>
    <h1>Error: {$page.status}</h1>
    <article>
        <p>Onee! Er is een foutmelding ontstaan. Lees onderstaande tekst voor meer informatie.</p>
        <p>{$page.error.message}</p>
    </article>
</section>

<style>

    :global(body) {
        height: 100vh;
    }

    section {
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 1.25rem;
		padding: 1rem 1rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 75vw;
	}

    h1 {
        margin: 0;
        background-color: #2e424d;
        padding: 0.6rem;
		border-radius: 0.6rem;
        color: #fff;
        position: absolute;
        top: -1.5rem;
        left: 1rem;
    }

    article {
        color: #fff;
        margin: 1.5rem 1rem;
        width: 90%;
    }

    p:nth-child(2) {
        font-style: italic;
        font-weight: 300;
    }

    @media (min-width: 68.75rem) {
        section {
            width: 40vw;
        }
    }
</style>