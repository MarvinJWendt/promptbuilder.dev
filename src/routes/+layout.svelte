<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  export let data
</script>

<svelte:head>
    <title>Prompt Builder</title>
</svelte:head>

{#key data.pathname}
    <main>
        <Navbar/>
        <article class="m-8">
            <slot/>
        </article>
    </main>
    <Footer/>
{/key}

<style lang="postcss">
    main {
        @apply mt-28 mx-auto sm:w-3/4 max-w-6xl;
    }
</style>
