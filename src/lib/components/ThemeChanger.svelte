<script>
  import {onMount} from "svelte";
  import {themeChange} from "theme-change";
  import {browser} from "$app/environment";
  import {navigating} from "$app/stores";

  function update() {
    const checkbox = document.getElementById('theme-selector-ckb')

    if (localStorage.getItem('theme') === 'light') {
      checkbox.checked = true
      updateParticleColor('#0000ff', 0.2)
    } else {
      checkbox.checked = false
      updateParticleColor('#ffffff', 0.1)
    }

    setParticleHeight()
  }

  function setParticleHeight() {
    if (!browser) return;
    const docHeight = document.documentElement.scrollHeight;
    const particleDiv = document.getElementById("particles");
    particleDiv.style.height = `${docHeight}px`;
  }

  function updateParticleColor(newColor, opacity) {
    if (!browser) return;
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }
    particlesJS.load('particles', '/assets/particlesjs-config.json', function () {
      if (window.pJSDom && window.pJSDom.length) {
        let pJS = window.pJSDom[0].pJS; // Get the first particles.js instance
        // Update particles color
        pJS.particles.color.value = newColor;
        pJS.particles.opacity.value = opacity;
        pJS.particles.line_linked.color = newColor;
        pJS.particles.line_linked.opacity = opacity;

        // Update the particles
        pJS.fn.particlesRefresh();

        setParticleHeight();
      }
    });
  }

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

    setTimeout(() => {
      update()
    }, 25)
  })

  let unsubscribe;

  // Reload particles and update height when navigation is complete
  unsubscribe = navigating.subscribe(($navigating) => {
    if (!$navigating) {
      setParticleHeight();
    }
  });

  if (browser) {
    window.addEventListener('resize', setParticleHeight);
  }
</script>

<label class="swap swap-flip text-3xl">
    <input on:change={update} id="theme-selector-ckb" type="checkbox"/>

    <div data-set-theme="dark" class="swap-on">🌞</div>
    <div data-set-theme="light" class="swap-off">🌚</div>
</label>
