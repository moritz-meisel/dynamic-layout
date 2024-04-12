<script lang="ts">
  import Header from "../Components/Header.svelte";
  import Aside from "../Components/Aside.svelte";
  import Main from "../Components/Main.svelte";
  import Footer from "../Components/Footer.svelte";
  import Navigation from "../Components/Navigation.svelte";
</script>

<div class="flex flex-col h-full">
  <Header />
  <div class="flex flex-grow">
    <Navigation />
    <Main />
    <Aside />
  </div>
  <Footer />
</div>