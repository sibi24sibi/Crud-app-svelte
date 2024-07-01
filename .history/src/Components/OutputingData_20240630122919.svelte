<script>
  import { saveData } from "./MyComponent.svelte"; // Import the saveData store
  import DataTable from "./DataTable.svelte"; // Import the DataTable component

  // Subscribe to the saveData store to receive the updated data
  const unsubscribe = saveData.subscribe((data) => {
    console.log("Received updated data:", data);
  });

  // Clean up the subscription when the component unmounts
  onDestroy(unsubscribe);
</script>

<DataTable data={saveData} />
