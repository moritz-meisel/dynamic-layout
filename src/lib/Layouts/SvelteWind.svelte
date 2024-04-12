<script lang="ts">
  import type { Node } from "../layouts";
  export let node: Node;
</script>

{#if node.type === "element"}
  <div class={node.style}>
    <svelte:component this={node.component} />
  </div>
{:else if node.type === "group" && node.children}
  <div class={node.style}>
    {#each node.children as child}
      <svelte:self node={child} />
    {/each}
  </div>
{:else}
  <p>Invalid node type: {node.type}</p>
{/if}
