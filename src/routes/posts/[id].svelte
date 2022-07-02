<script>
  import { page } from "$app/stores";
  import { getPost } from "$lib/services";
  import Card from "$lib/Card.svelte";
  import Error from "$lib/error.svelte";

  const post = getPost($page.params["id"]);
</script>

{#await post}
  <h2 class="h-2 mb-5">getting post</h2>
  <progress class="progress w-56"></progress>
{:then { data, error }}
  {#if data}
    <Card cardData="{data[0]}" />
  {:else}
    <Error error="{error}" />
  {/if}
{/await}
