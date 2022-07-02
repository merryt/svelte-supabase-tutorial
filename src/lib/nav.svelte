<script>
  import { signout } from "$lib/services";
  import { user } from "$lib/stores";

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
      {#if $user != null}
        <li><a href="/">{$user.email}</a></li>
        <li>
          <button on:click|preventDefault="{handleSignout}">Logout</button>
        </li>
      {:else}
        <li><a href="/login">Login</a></li>
      {/if}
    </ul>
  </div>
</div>
