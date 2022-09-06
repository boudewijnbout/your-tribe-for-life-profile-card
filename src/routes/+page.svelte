<script>
    import * as prismicH from '@prismicio/helpers';
    export let data;
</script>

<main>

    <section class="personal-card">
        <h1>{data.document.data.name[0].text}</h1>
        {@html prismicH.asHTML(data.document.data.content)}
        <img src="{data.document.data.image.url}" alt="">
    </section>
</main>

<style>
    :global(body) {
        background-color: #f1f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .personal-card {
        background-color: white;
        width: 25vw;
        transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg);
        padding: 1rem 1rem;
        border-radius: 10px;
        transition: 200ms;
    }

    .personal-card:hover {
        transform: none;
    }

    .personal-card img {
        width: 50%;
        height: auto;
    }
</style>