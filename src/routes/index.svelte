<script>
  import CreatePost from "$lib/CreatePost.svelte";
  import { getAllPosts } from "$lib/services";
  import Error from "$lib/error.svelte";
  import Card from "$lib/Card.svelte";
  import { user } from "$lib/stores";

  const posts = getAllPosts();
  console.log(posts);
</script>

<h1>Welcome to qwitter</h1>
{#if $user}
  <CreatePost />
{/if}

{#await posts}
  <div class="w-full flex content-center items-center flex-col mt-20">
    <h2 class="h-2 mb-10">getting posts</h2>
    <progress class="progress w-56"></progress>
  </div>
{:then { data, error }}
  {#if data}
    {#each data as post}
      <Card card="{post}" />
    {/each}
  {:else}
    <Error error="{error}" />
  {/if}
{/await}
