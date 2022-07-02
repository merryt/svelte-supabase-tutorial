<script>
  import "../app.css";
  import Nav from "$lib/nav.svelte";
</script>

<Nav />
<main class="container mx-auto p-8 max-w-2xl">
  <slot />
</main>
