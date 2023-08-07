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

<Navbar/>
{#key data.pathname}
    <div
            in:fade={{ duration: 300, delay: 400 }}
            out:fade={{ duration: 300 }}
            class="page"
    >
        <slot/>
    </div>
{/key}
<div class="mt-64">
    <Footer/>
</div>
