<script>
  export let data;

  const columns = ["Name", "Age"];

  // Function to format the data for display in the table
  const formatData = (data) => {
    return columns.map((column) => {
      if (column === "Name") {
        return data.name;
      } else if (column === "Age") {
        return data.age;
      }
    });
  };
</script>

<table>
  <thead>
    <tr>
      {#each columns as column (column)}
        <th>{column}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as data (data)}
      <tr>
        {#each formatData(data) as value (value)}
          <td>{value}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
