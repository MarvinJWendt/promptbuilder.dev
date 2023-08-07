<script>
  export let data;

  let category = data.category;
</script>

<div class="h-screen bg-gray-900 flex flex-col justify-center items-center text-white">
    <h1 class="text-3xl mb-8">Choose a path</h1>
    {#if category}
        <div class="flex flex-wrap gap-4 justify-center">
            {#each category.paths as path}
                <a href="/builder/{category.name}/{path}" class="btn btn-outline">{path}</a>
            {/each}
        </div>
    {:else}
        <div class="flex flex-col items-center justify-center">
            <progress class="progress w-56 h-2"></progress> <!-- Adjusted height for a bigger appearance -->
        </div>
    {/if}
    <div class="mt-6 flex flex-col w-1/3 border-opacity-50">
        <div class="divider text-gray-400">OR</div>
    </div>
    <a href="/builder" class="link text-gray-400">Back to categories</a>
</div>

<style>
    :global(body) {
        overflow-y: hidden;
    }
</style>
