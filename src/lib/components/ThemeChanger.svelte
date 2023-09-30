<script>
  import {onMount} from "svelte";
  import {themeChange} from "theme-change";

  onMount(() => {
    themeChange(false)

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
