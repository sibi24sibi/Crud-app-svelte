<script>
  import Input from "./Input.svelte";
  import { writable } from "svelte/store";
  let nameValue = "";
  let ageValue = "";
  const storeValue = writable("");
  const reset = () => {
    nameValue = "";
    ageValue = "";
  };

  const save = () => {
    if (nameValue || ageValue) {
      console.log("Value saved:", nameValue, ageValue);
    } else {
      console.log("No value to save");
    }
  };
</script>

<div class="flex flex-col justify-center gap-5 items-center">
  <Input bind:value={nameValue} />
  <Input bind:value={ageValue} />
  <button on:click={reset}>reset</button>
  <button on:click={save}>save</button>
</div>

<style>
  input {
    width: 200px;
    margin-bottom: 10px;
  }
</style>
