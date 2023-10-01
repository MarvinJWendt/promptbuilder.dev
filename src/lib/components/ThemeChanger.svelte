<script>
  import {onMount} from "svelte";
  import {themeChange} from "theme-change";

  onMount(() => {
    themeChange(false)

    // if the html tag does not have the data-theme attribute, set it to the preferred theme (set by browser)
    if (!document.documentElement.hasAttribute('data-theme')) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
      }
    }

    const checkbox = document.getElementById('theme-selector-ckb')
    if (localStorage.getItem('theme') === 'light') {
      checkbox.checked = true
    }
  })
</script>

<label class="swap swap-flip text-3xl">
    <input id="theme-selector-ckb" type="checkbox"/>

    <div data-set-theme="dark" class="swap-on">🌞</div>
    <div data-set-theme="light" class="swap-off">🌚</div>
</label>
