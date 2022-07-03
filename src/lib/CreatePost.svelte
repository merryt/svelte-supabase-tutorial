<script>
  import { createPost, getUser } from "$lib/services";
  import Error from "$lib/error.svelte";
  import Success from "$lib/success.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let content = "";

  let createPostPromise = Promise.resolve({});

  const newPost = async () => {
    const user = getUser();
    const newpost = createPost({ content, user: user.email });
    content = "";
    dispatch("newPost", await newpost);
  };
</script>

<form on:submit|preventDefault="{newPost}">
  <div class="form-control">
    <textarea
      required
      class="textarea textarea-primary mb-4"
      placeholder="Put some text here"
      bind:value="{content}"></textarea>
    {#await createPostPromise}
      <button class="btn btn-disabled text-xl">Submit</button>
    {:then { data, error }}
      <button class="btn btn-primary text-xl">Submit</button>
      {#if error}
        <Error error="{error}" />
      {/if}

      {#if data}
        <Success success="Post sent!" />
      {/if}
    {/await}
  </div>
</form>
