<script lang="ts">
  import Layout from "./lib/Layout.svelte";
  const types = ["single-column", "two-column", "side-nav", "custom", "very-custom"];

  let selectedType: "single-column" | "two-column" | "side-nav" | "custom" = "single-column";
</script>

<div class="layout-container">
  <nav>
    {#each types as type}
      <label>
        <input
          bind:group={selectedType}
          type="radio"
          name={type}
          value={type}
        />
        {type}
      </label>
    {/each}
  </nav>
  <main>
    <Layout type={selectedType} />
  </main>
</div>

<style>
  .layout-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }

  main {
    width: 100%;
    flex-grow: 1;
  }
</style>
