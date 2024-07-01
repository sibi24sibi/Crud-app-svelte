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

  const saveData = writable({ name: "", age: "" });

  const save = () => {
    if (nameValue || ageValue) {
      saveData.update((data) => ({ ...data, name: nameValue, age: ageValue }));
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
</style>

<script>
  import { saveData } from "./MyComponent.svelte"; // Import the saveData store
  import DataTable from "./DataTable.svelte"; // Import the DataTable component

  // Subscribe to the saveData store to receive the updated data
  const unsubscribe = saveData.subscribe(data => {
    console.log("Received updated data:", data);
  });

  // Clean up the subscription when the component unmounts
  onDestroy(unsubscribe);
</script>

<DataTable data={saveData} />
