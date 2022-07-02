<script>
  export let success;
</script>

{#if success}
  <strong class="text-green-600">{success.message}</strong>
{/if}
