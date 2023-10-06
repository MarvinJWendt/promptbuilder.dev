<script>
  import "../app.scss";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";

  export let data
</script>

<svelte:head>
    <script src="/assets/js/particles.min.js"></script>
</svelte:head>

{#key data.pathname}
    <div id="particles" class="absolute left-0 top-0 w-full -z-10"></div>
    <main class="min-h-screen">
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
