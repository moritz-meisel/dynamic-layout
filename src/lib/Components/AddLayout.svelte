<script lang="ts">
  import { customLayoutString } from "../layouts";

  let name = "New layout";
  let value = `
  {
    "style": "flex flex-col h-full",
    "children": [
      {
        "component": "Header"
      },
      {
        "style": "flex flex-grow",
        "children": [
          {
            "component": "Footer"
          },
          {
            "component": "Main",
            "style": "flex flex-grow"
          },
          {
            "component": "Aside",
            "style": "h-full"
          }
        ]
      }
    ]
  }
  `;
  export let onSave;
</script>

<div
  class="w-full h-full absolute top-0 left-0 flex justify-center align-items"
>
  <div class="flex flex-col w-1/2 h-1/2 bg-white">
    <div class="flex justify-center p-4">
      <input bind:value={name} placeholder="Name" />
      <button
        on:click={() => onSave(name, value)}
        class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
      >
        <div
          class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"
        ></div>
        <span class="relative text-black group-hover:text-white">Save</span>
      </button>
    </div>
    <div class="flex-grow">
      <textarea
        class="w-full h-full"
        bind:value
        placeholder="Paste your layout here"
      />
    </div>
  </div>
</div>

<style>
  :global(.codemirror-wrapper) {
    height: 100%;
  }

  :global(.cm-editor) {
    height: 100%;
  }

  input, textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    color: black;
  }

  button {
    padding: 0.5rem 1rem;
    color: black;
    border: none;
    border-radius: 0.25rem;
  }
</style>
