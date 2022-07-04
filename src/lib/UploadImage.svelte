<script>
  export let file;
  //   import supabase from "./supabase";

  $: console.log(file);

  async function getFile(e) {
    file = !!e.target.files.length && e.target.files[0];

    // const { data, error } = await supabase.storage
    //   .from("images")
    //   .upload(`public/${file.name}`, file, {
    //     cacheControl: "3600",
    //     upsert: false,
    //   });
  }
</script>

<input type="file" class="input" on:change="{getFile}" />
