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

<Input bind:value={letValue} />
<Input bind:value={$storeValue} />
<button on:click={reset}>reset</button>
