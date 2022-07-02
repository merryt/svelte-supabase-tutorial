<script>
  import { signout, getUser } from "$lib/services";
  const currentUser = getUser();

  const handleSignout = () => {
    signout();
  };
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">qwitter</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      {#await currentUser}
        <li><a href="/login">Login</a></li>
      {:then user}
        {#if user}
          <li><a href="/">{user.email}</a></li>
          <li>
            <button on:click|preventDefault="{handleSignout}">Logout</button>
          </li>
        {:else}
          <li><a href="/login">Login</a></li>
        {/if}
      {/await}
    </ul>
  </div>
</div>
