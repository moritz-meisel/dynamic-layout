<script lang="ts">
  import type { LayoutNode } from "../layouts";
  import SvelteWind from "./SvelteWind.svelte";

  export let layout: LayoutNode;
</script>

<SvelteWind node={layout} />
