<script>
  import { browser } from "$app/env";
  import { goto } from "$app/navigation";
  import { getUser, signIn } from "$lib/services";
  import Error from "$lib/error.svelte";
  import Success from "$lib/success.svelte";

  const user = getUser();

  // redirect if already logged in
  if (browser && user) goto("/");

  let signInPromise = Promise.resolve({});

  let email = "";

  function handleSignin() {
    // validate before sending
    signInPromise = signIn({ email });
  }
</script>

{#await signInPromise}
  <h2 class="h-2 mb-5">Sending magic link to {email}</h2>
  <progress class="progress w-56"></progress>
{:then { data, error }}
  {#if error}
    <Error error="{error}" />
  {/if}

  {#if data}
    <Success success="Successfully sent magic link to {email}" />
  {:else}
    <form on:submit|preventDefault="{handleSignin}">
      <div class="form-control">
        <label class="label" for="email">
          <span class="label-text">Login to twitter clone</span>
        </label>
        <div class="input-group">
          <input
            id="email"
            type="text"
            placeholder="Type here"
            bind:value="{email}"
            class="input input-bordered w-full max-w-xs"
          />
          <button class="btn">Get Magic Link</button>
        </div>
      </div>
    </form>
  {/if}
{/await}
