<script>
  import CreatePost from "$lib/CreatePost.svelte";
  import { getAllPosts } from "$lib/services";
  import Error from "$lib/error.svelte";
  import Card from "$lib/Card.svelte";

  const posts = getAllPosts();
  console.log(posts);
</script>

<h1>Welcome to qwitter</h1>
<CreatePost />

{#await posts then { data, error }}
  {#if data}
    {#each data as post}
      <Card cardData="{post}" />
    {/each}
  {:else}
    <Error error="{error}" />
  {/if}
{/await}
