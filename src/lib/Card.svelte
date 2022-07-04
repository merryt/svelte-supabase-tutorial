<script>
  import { createLike } from "$lib/services";
  import { user } from "$lib/stores";

  export let card;

  console.log(card);
  const handleLike = () => {
    card.likes = card.likes + 1;
    console.log({ post: card.id, user: $user.email });
    createLike({ post: card.id, user: $user.email });
  };
</script>

{#if card}
  <div class="card w-full bg-base-100 shadow-xl my-4">
    {#if card.publicURL}
      <figure><img src="{card.publicURL}" alt="{card.content}" /></figure>
    {/if}
    <div class="card-body">
      <a href="/posts/{card.id}" class="card-title">{card.content}</a>

      <div class="card-actions justify-between mt-10 items-center">
        <small>{card.user}</small>
        <div>
          <button class="btn" on:click|preventDefault="{handleLike}"
            >Like ({card.likes})</button
          >
        </div>
      </div>
    </div>
  </div>
{/if}
