<script>
  export let value = "";
  const onInput = (e) => (value = e.target.value);
</script>

<input {value} on:input={onInput} />

<style>
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  h2 {
    margin-top: 10px;
  }
  p {
    margin-bottom: 10px;
  }
</style>
