import Header from "./Components/Header.svelte";
import Aside from "./Components/Aside.svelte";
import Main from "./Components/Main.svelte";
import Footer from "./Components/Footer.svelte";
import Navigation from "./Components/Navigation.svelte";

export type LayoutNode = {
  children?: LayoutNode[];
  style?: string;
  component?: string;
};

export const COMPONENTS = {
  Header: Header,
  Aside: Aside,
  Main: Main,
  Footer: Footer,
  Navigation: Navigation,
};

export const layout: LayoutNode = {
  style: "flex flex-col h-full",
  children: [
    {
      component: "Header",
    },
    {
      style: "flex flex-grow",
      children: [
        {
          component: "Aside",
          style: "h-full",
        },
        {
          component: "Main",
          style: "flex flex-grow",
        },
      ],
    },
    {
      component: "Footer",
    },
  ],
};

export const customLayoutString = `{"style":"flex flex-col h-full","children":[{"component":"Header"},{"component":"Footer"},{"style":"flex flex-grow","children":[{"component":"Main","style":"flex flex-grow"},{"component":"Aside","style":"h-full"}]}]}`;
export const veryCustomLayout: LayoutNode = JSON.parse(customLayoutString);
