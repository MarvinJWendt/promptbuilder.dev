<script>
  import {fade} from 'svelte/transition'
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  export let data
</script>

<svelte:head>
    <title>Prompt Builder</title>
</svelte:head>

{#key data.pathname}
        <nav>
            <Navbar/>
        </nav>
        <main>
            <div
                    in:fade={{ duration: 300, delay: 400 }}
                    out:fade={{ duration: 300 }}
            >
                <slot/>
            </div>
        </main>
        <footer>
            <Footer/>
        </footer>
{/key}

<style lang="postcss">
    main {
        @apply mx-auto sm:w-3/4 max-w-4xl;
    }
</style>
