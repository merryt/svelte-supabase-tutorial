<script>
  export let card;
  let likes = 0,
    comments = [];
</script>

{#if card}
  <div class="card w-full bg-base-100 shadow-xl my-4">
    <div class="card-body">
      <a href="/posts/{card.id}" class="card-title">{card.content}</a>

      <div class="card-actions justify-between mt-10 items-center">
        <small>{card.user}</small>
        <div>
          <button class="btn">Like ({card.likes})</button>
          <button class="btn">comment({card.comments.length})</button>
        </div>
      </div>
    </div>
  </div>
{/if}
