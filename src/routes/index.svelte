<script>
  import CreatePost from "$lib/CreatePost.svelte";
  import { getAllPosts } from "$lib/services";
  import Error from "$lib/error.svelte";
  import Card from "$lib/Card.svelte";
  import { user } from "$lib/stores";

  let postsPromise = getAllPosts();
  let posts;
  postsPromise.then((d) => {
    posts = d.data;
  });
  const newPost = async (event) => {
    let newPost = event.detail["data"][0];
    newPost = { ...newPost, comments: [], likes: 0 };
    posts = [newPost, ...posts];
    console.log(posts);
  };
</script>

<h1>Welcome to qwitter</h1>
{#if $user}
  <CreatePost on:newPost="{newPost}" />
{/if}

<!-- {#await posts}
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
{/await} -->

{#if posts}
  {#each posts as post}
    <Card card="{post}" />
  {/each}
{/if}
