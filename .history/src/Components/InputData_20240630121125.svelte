<script>
  import Input from "./Input.svelte";
  import { writable } from "svelte/store";
  let letValue = "test let";
  const storeValue = writable("test store");
  const reset = () => {
    letValue = "";
    $storeValue = "";
  };
</script>

<div class="flex justify-center items-center">
  <Input bind:value={letValue} />
  <Input bind:value={$storeValue} />
  <button on:click={reset}>reset</button>
</div>

<style>
  input {
    width: 200px;
    margin-bottom: 10px;
  }
</style>
