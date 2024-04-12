<script lang="ts">
  import { COMPONENTS, type LayoutNode } from "../layouts";
  export let node: LayoutNode;

  $: component = COMPONENTS[node.component];
</script>

{#if node.component}
  <div class={node.style}>
    <svelte:component this={component} />
  </div>
{:else if node.children}
  <div class={node.style}>
    {#each node.children as child}
      <svelte:self node={child} />
    {/each}
  </div>
{/if}
