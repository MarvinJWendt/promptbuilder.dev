<script>
    export let data;
    $: console.log(data);

    export let exclude = "";

    export let isPath = false;

    data = data.filter(item => item.slug !== exclude);
    data.sort((a, b) => a.name.replace(/^.*? /, '').localeCompare(b.name.replace(/^.*? /, '')))

    const numCols = 3;
    let sortedData = Array.from({length: numCols}, () => []);

    for (let i = 0; i < data.length; i++) {
      sortedData[i % numCols].push(data[i]);
    }
</script>

<div class="grid gap-4 grid-cols-1 md:grid-cols-3 w-full">
    {#each sortedData as col}
        <div>
            {#each col as data}
                <a href="/{isPath ? data.categorySlug + '/' + data.slug : data.slug}" id="{data.slug}" class="card card-compact mt-4 bg-white dark:bg-base-200/40 card-bordered border-1 border-black dark:border-gray-800 shadow-md">
                    <div class="card-body">
                        <h2 class="card-title mt-1">{data.name}</h2>
                        <p>{data.description}</p>
                        <div class="card-actions justify-end">
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    {/each}
</div>
