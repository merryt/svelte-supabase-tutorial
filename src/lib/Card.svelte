<script>
  export let cardData;
</script>

{#if cardData}
  <div class="card w-full bg-base-100 shadow-xl my-4">
    <div class="card-body">
      <a href="/posts/{cardData.id}" class="card-title">{cardData.content}</a>

      <div class="card-actions justify-end">
        <span>{cardData.user}</span>
      </div>
    </div>
  </div>
{/if}
