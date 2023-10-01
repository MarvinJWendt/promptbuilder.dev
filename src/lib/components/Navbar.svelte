<script>
  import ThemeChanger from "$lib/components/ThemeChanger.svelte";
  import { onMount } from "svelte";

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
    @media (max-width: 768px) {
        .navbar {
            @apply flex-wrap;
        }
        .navbar-center {
            @apply absolute top-20 left-1/2 transform -translate-x-1/2;
        }
    }
</style>

<div>
    <div class="navbar absolute top-0 left-0 bg-base-200/50 w-full"></div>
    <nav class="navbar absolute top-0 sm:w-3/4 max-w-6xl flex">
        <div class="navbar-start">
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
            <ThemeChanger />
        </div>
    </nav>
</div>
