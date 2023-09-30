<script>
  import ThemeChanger from "$lib/components/ThemeChanger.svelte";
</script>

<nav class="navbar absolute top-0 sm:w-3/4 max-w-6xl">
    <div class="flex-1">
        <a href="/" class="btn btn-ghost normal-case text-xl">🛠️ Prompt Builder</a>
    </div>
    <div class="flex-none">
        <ThemeChanger />
    </div>
</nav>
