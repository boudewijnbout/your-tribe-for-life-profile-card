<script>
    import * as prismicH from '@prismicio/helpers';
    export let data;
</script>

<main>
    <h1>{data.document.data.title}</h1>

    {@html prismicH.asHTML(data.document.data.content)}

    <img src="{data.document.data.image.url}" alt="">
</main>