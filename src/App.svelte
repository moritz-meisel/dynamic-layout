<script lang="ts">
  import AddLayout from "./lib/Components/AddLayout.svelte";
  import { layout as layoutConfig, veryCustomLayout as veryCustomLayoutConfig } from "./lib/layouts";
  import SingleColumn from "./lib/Layouts/SingleColumn.svelte";
  import TwoColumn from "./lib//Layouts/TwoColumn.svelte";
  import SideNav from "./lib//Layouts/SideNav.svelte";
  import SvelteWind from "./lib//Layouts/SvelteWind.svelte";

  let selectedType = "single-column";

  let layoutConfigs = {
    "single-column": {},
    "two-column": {},
    custom: layoutConfig,
    "very-custom": veryCustomLayoutConfig,
  };

  let layouts = {
    "single-column": SingleColumn,
    "two-column": TwoColumn,
    "side-nav": SideNav,
    custom: SvelteWind,
    "very-custom": SvelteWind,
  };

  let isAddLayoutOpen = false;

  function openAddLayout() {
    isAddLayoutOpen = true;
  }

  function saveLayout(name: string, layout: string) {
    layouts[name] = SvelteWind;
    layoutConfigs[name] = JSON.parse(layout);
    selectedType = name;
    isAddLayoutOpen = false;
  }

  $: layoutComponent = layouts[selectedType];
  $: types = Object.keys(layouts);
</script>

{#if isAddLayoutOpen}
  <AddLayout onSave={saveLayout} />
{/if}
<div class="layout-container">
  <nav class="flex p-2 gap-2 items-center">
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
    <button class="" on:click={() => openAddLayout()}>Add Layout</button>
  </nav>
  <main>
    <svelte:component
      this={layoutComponent}
      node={layoutConfigs[selectedType]}
    />
  </main>
</div>

<style>
  .layout-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  main {
    width: 100%;
    flex-grow: 1;
  }

  button {
    border: 1px solid white;
    border-radius: 4px;
    padding: 4px;
  }
</style>
