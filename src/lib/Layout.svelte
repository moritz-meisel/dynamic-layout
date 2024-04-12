<script lang="ts">
  import SingleColumn from "./Layouts/SingleColumn.svelte";
  import TwoColumn from "./Layouts/TwoColumn.svelte";
  import SideNav from "./Layouts/SideNav.svelte";
  import SvelteWind from "./Layouts/SvelteWind.svelte";
  import { layout, veryCustomLayout } from "./layouts";

  export let type: "single-column" | "two-column" | "side-nav" | "custom" | "very-custom";

  const LAYOUTS = {
    "single-column": SingleColumn,
    "two-column": TwoColumn,
    "side-nav": SideNav,
    "custom": SvelteWind,
    "very-custom": SvelteWind,
  };

  const layoutConfigs = {
    "single-column": {},
    "two-column": {},
    custom: layout,
    "very-custom": veryCustomLayout
  }


  $: layoutComponent = LAYOUTS[type];
</script>

<svelte:component this={layoutComponent} node={layoutConfigs[type]} />
