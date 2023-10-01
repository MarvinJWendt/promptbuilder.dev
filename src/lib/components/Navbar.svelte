<script>
  import ThemeChanger from "$lib/components/ThemeChanger.svelte";
  import {onMount} from "svelte";

  let breadcrumbs = [
    {
      name: "Home",
      url: "/"
    }
  ];

  onMount(() => {
    const path = window.location.pathname;
    path.split("/").forEach((crumb, index) => {
      if (crumb === "") {
        return;
      }
      breadcrumbs.push({
        name: crumb,
        url: path.split("/").slice(0, index + 1).join("/")
      });
    });

    // Update variable to trigger reactivity
    breadcrumbs = breadcrumbs;
  });
</script>

<style lang="postcss">
    /* Add custom styling */
    .navbar {
        @apply flex-wrap xl:flex-nowrap;
    }

    .navbar-center {
        @apply absolute xl:static top-20 left-1/2 transform xl:transform-none -translate-x-1/2;
    }
</style>

<div>
    <div class="navbar absolute top-0 left-0 bg-base-200/50 w-full"></div>
    <nav class="navbar absolute top-0 sm:w-3/4 max-w-6xl flex">
        <div class="navbar-start">
            <div class="flex-none xl:hidden">
                <label for="my-drawer-2" aria-label="open sidebar" class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         class="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
            </div>
            <a href="/" class="btn btn-ghost normal-case text-xl">🛠️ Prompt Builder</a>
        </div>
        <div class="navbar-center">
            <div class="text-md breadcrumbs">
                <ul>
                    {#each breadcrumbs as breadcrumb}
                        <li>
                            <a href={breadcrumb.url}>{breadcrumb.name}</a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
        <div class="navbar-end">
            <ThemeChanger/>
        </div>
    </nav>
</div>
