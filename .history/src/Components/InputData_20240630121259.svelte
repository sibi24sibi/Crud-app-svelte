<script>
  import Input from "./Input.svelte";
  import { writable } from "svelte/store";
  let letValue = "";
  const storeValue = writable("test store");
  const reset = () => {
    letValue = "";
    $storeValue = "";
  };
</script>

<div class="flex flex-col justify-center gap-5 items-center">
  <Input bind:value={} />
  <Input bind:value={} />
  <button on:click={reset}>reset</button>
</div>

<style>
  input {
    width: 200px;
    margin-bottom: 10px;
  }
</style>
