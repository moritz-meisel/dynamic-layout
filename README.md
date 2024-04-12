#
Dynamic Layouts

## Data Structure 📰
Layouts can be defined as a tree of LayoutNodes

```ts
export type LayoutNode = {
  children?: LayoutNode[];
  style?: string;
  component?: string;
};
```

`children` are 0 or n `LayoutNode`;

`style` are the CSS class names of the DOM element. We can use Tailwind to style the layout.

`component` one of predefined layout components like `Header`, `Navigation`, `Main`, `Footer`, `Hero`, `Aside`, etc... If we get custom components at runtime working we can probably use these here too.


## How it works 🪄
The magic happens in the `SvelteWind` component.
We pass the root layout node and it will recursively render new SvelteWind Components for each LayoutNode.

## Run the demo
```
npm i
npm run dev
```

You can define a custom layout by clicking the `Add Layout` button


## Example layout config
```json
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
  ```