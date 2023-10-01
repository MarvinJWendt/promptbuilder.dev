<script>
    export let data;
</script>

<section class="text-center">
    <h2>All Prompt Templates</h2>
    {#each data as category}
        <h3 class="text-2xl"><a href="/{category.slug}">{category.name}</a></h3>
        <ul>
            {#each category.paths as path}
                <li class="mt-2">
                    <a href="/prompts/{path.slug}"><b>{path.name}</b>: {path.description}</a>
                </li>
            {/each}
        </ul>
    {/each}
</section>
