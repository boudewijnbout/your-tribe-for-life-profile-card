<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet">
</svelte:head>

<script>
    import * as prismicH from '@prismicio/helpers';
    export let data;
</script>

<main>

    <section class="personal-card">
        <img src="{data.document.data.image.url}" alt="">
        
        <div>
            <h1>{data.document.data.name[0].text}</h1>
            <p>{@html prismicH.asHTML(data.document.data.content)}</p>
        </div>
        
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

    @font-face {
        font-family: 'Borg';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/Borg.ttf') format('ttf');
    }

    .personal-card {
        background-color: #fff;
        width: 60vw;
        padding: 1rem 1rem;
        border-radius: 10px;
        transition: 300ms;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; 
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .personal-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30%;
        background-image: linear-gradient(to bottom, #7367F0, #CE9FFC);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        z-index: -1;
    }

    .personal-card:hover {
        transform: none;
    }

    .personal-card img {
        width: 50%;
        height: auto;
        border-radius: 3px;
     }

    .personal-card h1 {
        font-family: 'Borg';
        font-size: 2.75rem;
        margin-top: 1rem;
        margin-bottom: 0;
        text-align: center;
    }

    .personal-card p {
        font-family: 'Inter', sans-serif;
        font-size: .9rem;
    }

    @media (min-width: 37.5rem) {
        .personal-card {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .personal-card::before {
            clip-path: polygon(0 0, 0 86%, 55% 0);
            height: 100%;
        }

        .personal-card img {
            margin-left: 1rem;
            width: 65%;
        }

        .personal-card h1 {
            text-align: left;
        }
    }

    @media (min-width: 62.5rem) {
        .personal-card {
            width: 45vw;
        }

        .personal-card img {
            width: 60%;
        }

        .personal-card h1 {
            font-size: 2.85rem; 
        }

        .personal-card p {
            font-size: .8rem;
        }
    }

    @media (min-width: 75rem) {
        .personal-card {
            transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg);
            width: 40vw;
        }

        .personal-card img {
            width: 60%;
            margin-left: 2rem;
        }

        .personal-card h1 {
            font-size: 3rem;
        }

        .personal-card p {
            font-size: .85rem;
        }
    }
</style>