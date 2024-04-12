import Header from "./Components/Header.svelte";
import Aside from "./Components/Aside.svelte";
import Main from "./Components/Main.svelte";
import Footer from "./Components/Footer.svelte";

export type LayoutNode = {
  type: string;
  children?: Node[];
  style: string;
  component?: any;
}

export const layout: LayoutNode = {
  type: "group",
  style: "flex flex-col h-full",
  children: [
    {
      type: "element",
      component: Header,
      style: ""
    },
    {
      type: "group",
      style: "flex flex-grow",
      children: [
        {
          type: "element",
          component: Aside,
          style: "h-full"
        },
        {
          type: "element",
          component: Main,
          style: "flex flex-grow"
        }
      ]
    },
    {
      type: "element",
      component: Footer,
      style: ""
    }
  ]
}

export const veryCustomLayout: LayoutNode = {
  type: "group",
  style: "flex flex-col h-full",
  children: [
    {
      type: "element",
      component: Header,
      style: ""
    },
    {
      type: "element",
      component: Footer,
      style: ""
    },
    {
      type: "group",
      style: "flex flex-grow",
      children: [
        {
          type: "element",
          component: Main,
          style: "flex flex-grow"
        },
        {
          type: "element",
          component: Aside,
          style: "h-full"
        }
      ]
    }
  ]
}