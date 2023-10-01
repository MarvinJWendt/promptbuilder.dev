<script>
    export let categories;
</script>

<nav class="absolute top-24 left-0">
    <div class="drawer xl:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/>
        <div class="drawer-side">
            <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
            <div class="menu pl-8 w-80 text-base-content bg-base-200 xl:bg-opacity-0 h-full z-50">
                <div class="flex flex-col gap-4 hover:cursor-pointer w-full">
                    <h2 class="text-xl font-bold">Categories</h2>
                    {#each categories as category}
                        <details open class="collapse">
                            <summary class="text-lg font-medium">{category.name}</summary>
                            <div class="collapse-content">
                                {#each category.paths as path}
                                    <li class="mt-1 pl-0">
                                        <a class="pl-0" href="/{category.slug}/{path.slug}">
                                            <b>{path.name}</b>
                                        </a>
                                    </li>
                                {/each}
                            </div>
                        </details>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</nav>
